/**
      * 根据请求回来的数组按照每三个数据为一个子数组进行切割
      * @param {请求回来的home数组/detailList数组}} listData 
      */
function spliceHomeList(listData) {
  let bigarr = []
  let arrSmall = []
  listData.forEach((msItem, index) => {
    if (arrSmall.length === 0) {
      bigarr.push(arrSmall)
    }
    arrSmall.push(msItem)
    if (arrSmall.length === 3) {
      arrSmall = []
    }
  })
  return bigarr
}


export {
  spliceHomeList
}