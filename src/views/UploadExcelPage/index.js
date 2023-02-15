import {columnDefs} from "@/custom-components";
import axios from "axios";

const listErrors = (arrayLogs, typeOfChecking, typeOfButton) => {
    let listLog = ''
    let status = true
    if (arrayLogs.length > 0) {
        arrayLogs.forEach(e => {
            listLog += "<p>" +
                "<span class='font-bold text-" + typeOfButton + "'>- " + typeOfChecking + "</span>" +
                " at row " +
                "<span class='font-bold text-" + typeOfButton + "'>" + e.row + "</span>" +
                " and column " +
                "<span class='font-bold text-" + typeOfButton + "'>" + e.col + "</span>" +
                "</p>"
        })
        if (!typeOfChecking.includes("DUPLICATE")) {
            status = false
        }
    } else {
        listLog += "<p class='font-bold text-success'>- Checking don't have any " + typeOfChecking + "</p>"
    }

    return {
        message: listLog,
        status: status
    }
}

const checkingData = async (dataArray) => {
    const loaderContainer = document.querySelector('.loading-layout');
    const displayLoading = () => {
        loaderContainer.style.display = 'flex';
    };
    const hideLoading = () => {
        loaderContainer.style.display = 'none';
    };
    displayLoading()

    const logCheckNullData = listErrors(checkNullData(dataArray), "Error: NOT NULL", "danger")
    const logCheckTypeData = listErrors(checkTypeData(dataArray), "Error: WRONG TYPE DATA", "danger")
    const logCheckWarningTypeData = listErrors(checkWarningTypeData(dataArray), "Waring: WARNING TYPE DATA", "warning")
    const logCheckWarningDuplicateData = listErrors(await checkWarningDuplicateData(dataArray), "Waring: WARNING DUPLICATE", "warning")

    const messageChecking = logCheckNullData.message + logCheckTypeData.message + logCheckWarningTypeData.message + logCheckWarningDuplicateData.message
    let statusChecking = true
    if (!logCheckNullData.status || !logCheckTypeData.status || !logCheckWarningTypeData.status) {
        statusChecking = false
    }
    hideLoading()

    return {
        messageChecking: messageChecking,
        statusChecking: statusChecking
    }
}

const checkNullData = (dataArray) => {
    const indexRow = []
    dataArray.forEach((data, index) => {
        columnDefs.forEach(cond => {
            if (cond.nullable === false) {
                if (typeof data[cond.field] === 'undefined' || data[cond.field] === '') {
                    indexRow.push({
                        row: index,
                        col: cond.headerName
                    })
                }
            }
        })
    })
    return indexRow
}

const isValidDate = (dateString) => {
    if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(dateString)) {
        return false;
    }
    const parts = dateString.split('/').map((p) => parseInt(p, 10));
    parts[0] -= 1;
    const d = new Date(parts[2], parts[1], parts[0]);
    return d.getDate() === parts[0] && d.getMonth() === parts[1] && d.getFullYear() === parts[2];
}

const isHaveAnyOptions = (value, options) => {
    return !!options.includes(value);
}

const checkTypeData = (dataArray) => {
    const indexRow = []
    dataArray.forEach((data, index) => {
        columnDefs.forEach(cond => {
            if (typeof data[cond.field] !== 'undefined') {
                if (typeof data[cond.field] !== cond.type) {
                    /* Check Date */
                    if (cond.type === 'date') {
                        if (!isValidDate((data[cond.field]))) {
                            indexRow.push({
                                row: index,
                                col: cond.headerName + " (" + cond.type + ")"
                            })
                        }
                        /* Check Number */
                    } else if (cond.type === 'number') {
                        if (isNaN(data[cond.field])) {
                            indexRow.push({
                                row: index,
                                col: cond.headerName + " (" + cond.type + ")"
                            })
                        }
                        /* Check Options */
                    } else if (cond.type === 'option') {
                        if (!isHaveAnyOptions(data[cond.field], cond.optionArray)) {
                            indexRow.push({
                                row: index,
                                col: cond.headerName + " (" + cond.type + ")"
                            })
                        }
                        /* Check Multiple Option */
                    } else if (cond.type === 'multiple-option') {
                        let dataOptionArray = data[cond.field].split(';')
                        dataOptionArray.forEach(optionArray => {
                            if (!isHaveAnyOptions(optionArray, cond.optionArray)) {
                                indexRow.push({
                                    row: index,
                                    col: cond.headerName + " (" + cond.type + ")"
                                })
                            }
                        })
                    } else {
                        indexRow.push({
                            row: index,
                            col: cond.headerName + " (" + cond.type + ")"
                        })
                    }
                }
            }
        })
    })
    return indexRow
}

const checkWarningTypeData = (dataArray) => {
    const indexRow = []
    dataArray.forEach((data, index) => {
        columnDefs.forEach(cond => {
            if (typeof data[cond.field] !== 'undefined') {
                if (isValidDate((data[cond.field])) && cond.type !== 'date') {
                    indexRow.push({
                        row: index,
                        col: cond.headerName + " (" + cond.type + ")"
                    })
                }

                if (!isNaN(data[cond.field]) && cond.type !== 'number') {
                    indexRow.push({
                        row: index,
                        col: cond.headerName + " (" + cond.type + ")"
                    })
                }
            }
        })
    })
    return indexRow
}

const typeTaxonomy = [
    'kingdom',
    'division',
    'class',
    'order',
    'family-group',
    'family',
    'genus',
];
const checkTaxonomyDuplicate = async (name) => {
    let resultTaxonomyDuplicate
    await axios.post("/core/taxonomy-duplicate", {
        name: name,
    }).then(response => {
        resultTaxonomyDuplicate = response.data;
    })
    return resultTaxonomyDuplicate
}

const checkWarningDuplicateData = async (dataArray) => {
    const indexRow = []
    for (const data of dataArray) {
        const index = dataArray.indexOf(data);
        const taxonomyBrowserData = data["kingdom"] + "-" +
            data["division"] + "-" +
            data["class"] + "-" +
            data["order"] + "-" +
            data["family-group"] + "-" +
            data["family"] + "-" +
            data["genus"]
        let taxonomyBrowserCheck = await checkTaxonomyDuplicate(taxonomyBrowserData)

        let objectResultCheck = {}
        objectResultCheck["row"] = index
        objectResultCheck["col"] = ''

        if (taxonomyBrowserCheck.length > 0) {
            taxonomyBrowserCheck.forEach((type, index) => {
                if (index !== 0) {
                    objectResultCheck["col"] += ', '
                }
                objectResultCheck["col"] += type
            })
        } else {
            typeTaxonomy.forEach((type, index) => {
                if (index !== 0) {
                    objectResultCheck["col"] += ', '
                }
                objectResultCheck["col"] += type
            })
        }
        indexRow.push(objectResultCheck)
    }
    return indexRow
}

export {checkingData}