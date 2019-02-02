export function getAccessToken() {
  var hash = location.hash.substring(1)
	hash = hash.split('&')
	for(let i=0; i<hash.length; i++) {
		if(hash[i].indexOf('access_token')>-1) {
			hash = hash[i].replace('access_token=', '')
			break
		}
	}
	return hash
}