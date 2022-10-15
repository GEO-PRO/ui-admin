<template>
  <Dropzone
      ref-key="dropzoneSingleRef"
      :options="{
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFiles: 1,
                acceptedFiles: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              }"
      class="dropzone"
  >
    <div class="text-lg font-medium">
      Drop files here or click to upload.
    </div>
  </Dropzone>
</template>

<script>
export default {
  name: "DropZoneUploadExcel"
}
</script>
