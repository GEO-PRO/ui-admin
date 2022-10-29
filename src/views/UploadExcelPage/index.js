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
    const logCheckNullData = listErrors(checkNullData(dataArray), "Error: NOT NULL", "danger")
    const logCheckTypeData = listErrors(checkTypeData(dataArray), "Error: WRONG TYPE DATA", "danger")
    const logCheckWarningTypeData = listErrors(checkWarningTypeData(dataArray), "Waring: WARNING TYPE DATA", "warning")
    const logCheckWarningDuplicateData = listErrors(await checkWarningDuplicateData(dataArray), "Waring: WARNING DUPLICATE", "warning")

    const messageChecking = logCheckNullData.message + logCheckTypeData.message + logCheckWarningTypeData.message + logCheckWarningDuplicateData.message
    let statusChecking = true
    if (!logCheckNullData.status || !logCheckTypeData.status || !logCheckWarningTypeData.status) {
        statusChecking = false
    }

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

// const BaseURL = 'https://kong2_sinhthainambo.girs.vn/core/'
const BaseURL = 'http://localhost:3000/'

const checkTaxonomyDuplicate = async (name, type) => {
    let resultTaxonomyDuplicate
    await axios.post(BaseURL + "taxonomy-duplicate", {
        name: name,
        type: type
    }).then(response => {
        resultTaxonomyDuplicate = response.data;
    })
    return resultTaxonomyDuplicate
}

const checkWarningDuplicateData = async (dataArray) => {
    const indexRow = []
    for (const data of dataArray) {
        const index = dataArray.indexOf(data);

        let kingdomCheck = await checkTaxonomyDuplicate(data["kingdom"], "kingdom")
        let divisionCheck = await checkTaxonomyDuplicate(data["division"], "division")
        let classCheck = await checkTaxonomyDuplicate(data["class"], "class")
        let orderCheck = await checkTaxonomyDuplicate(data["order"], "order")
        let familyGroupCheck = await checkTaxonomyDuplicate(data["family-group"], "family-group")
        let familyCheck = await checkTaxonomyDuplicate(data["family"], "family")
        let genusCheck = await checkTaxonomyDuplicate(data["genus"], "genus")

        if (!kingdomCheck.status || !divisionCheck.status || !classCheck.status ||
            !orderCheck.status || !familyGroupCheck.status || !familyCheck.status || !genusCheck.status) {
            let objectResultCheck = {}
            objectResultCheck["row"] = index
            objectResultCheck["col"] = ''
            if (kingdomCheck.status !== true) {
                objectResultCheck["col"] += kingdomCheck.type + " or "
            }
            if (divisionCheck.status !== true) {
                objectResultCheck["col"] += divisionCheck.type + " or "
            }
            if (classCheck.status !== true) {
                objectResultCheck["col"] += classCheck.type + " or "
            }
            if (orderCheck.status !== true) {
                objectResultCheck["col"] += orderCheck.type + " or "
            }
            if (familyGroupCheck.status !== true) {
                objectResultCheck["col"] += familyGroupCheck.type + " or "
            }
            if (familyCheck.status !== true) {
                objectResultCheck["col"] += familyCheck.type + " or "
            }
            if (genusCheck.status !== true) {
                objectResultCheck["col"] += genusCheck.type + " or "
            }
            objectResultCheck["col"] = objectResultCheck["col"].slice(0, -4)

            indexRow.push(objectResultCheck)
        }
    }
    return indexRow
}

export {checkingData}
