function squareImage(url, opt="w_500,h_500,c_fill") {
  let search = "/upload/"
  let strUrl = url.split(search)
  let transform = strUrl[0]+search+opt+"/"+strUrl[1]
  // console.log(transform)
  return transform
}

export default squareImage