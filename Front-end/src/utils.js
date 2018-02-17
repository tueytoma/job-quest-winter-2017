let utils = {}

utils.isMobile = () => {
	//if(!navigator) return false
	// return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
}

module.exports = utils