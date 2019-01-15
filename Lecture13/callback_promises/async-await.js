const util = require('util')

function downloadFile(url, downloaded) {
  console.log(`downloading from ${url}`)
  if (!url.startsWith('http')) {
    return downloaded(new Error('URL must start with http(s)'))
  }
  setTimeout(() => {
    let fileName = url.split('/').pop()
    console.log(`File downloaded = ${fileName}`)
    if (typeof downloaded === 'function') {
      downloaded(null, fileName)
    }
  }, 2000)
}

function compressFile(file, type, compressed) {
  console.log(`Compressing ${file} to ${type}`)

  if (['zip', 'rar', '7zip'].indexOf(type) == -1) {
    return compressed(new Error('We only support zip, rar, 7zip'))
  }

  if (['png', 'jpg'].indexOf(file.split('.').pop()) == -1) {
    return compressed(new Error('We only support png, jpg'))
  }


  setTimeout(() => {
    let compressedFile = file.split('.')[0] + '.' + type
    console.log(`Compressed and saved as ${compressedFile}`)
    if (typeof compressed === 'function') {
      compressed(null, compressedFile)
    }
  }, 1000)
}

function uploadFile(website, file, uploaded) {
  console.log(`Uploading ${file} to ${website}`)

  if (website.indexOf('drive.com') == -1) {
    return uploaded(new Error('We only upload to drive.com'))
  }

  setTimeout(() => {
    let uploadedUrl = website + '/' + file
    console.log(`Uploaded and saved to ${uploadedUrl}`)
    if (typeof uploaded === 'function') {
      uploaded(null, uploadedUrl)
    }
  }, 3000)
}


let downloadFileP = util.promisify(downloadFile)
let compressFileP = util.promisify(compressFile)
let uploadFileP = util.promisify(uploadFile)

async function task () {
  let file = await downloadFileP('http://website.com/path/file.png')
  let cmpFile = await compressFileP(file, 'zip')
  let uploaded = await uploadFileP('http://drive.com', cmpFile)
}

task()
