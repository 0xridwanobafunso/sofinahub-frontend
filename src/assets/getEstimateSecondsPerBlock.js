async function getEstimateSecondsPerBlock(web3, x) {
  try {
    let now = await web3.eth.getBlockNumber()
    let nowTimestamp = (await web3.eth.getBlock(now)).timestamp
    let xTimestamp = (await web3.eth.getBlock(now - x)).timestamp

    // in seconds
    return Math.round((nowTimestamp - xTimestamp) / x)
  } catch (error) {
    console.log(error)
  }
}

export default getEstimateSecondsPerBlock
