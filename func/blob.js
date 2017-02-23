import RNFetchBlob from 'react-native-fetch-blob'

let postFile = (instance, binaryDataInBase64) => {
  return RNFetchBlob.fetch('POST',
    'https://native-upload.herokuapp.com/upload', {
    Authorization : "Bearer access-token",
    otherHeader : "foo",
    'Content-Type' : 'multipart/form-data',
  }, [
    { name : 'avatar', filename : 'avatar.png', data: binaryDataInBase64}
  ])
  .uploadProgress({ interval : 1 },(written, total) => {
        instance.setState({
          ...instance.state,
          progress: Math.ceil((written / total) * 100)
        })
  })
}

module.exports = postFile;
