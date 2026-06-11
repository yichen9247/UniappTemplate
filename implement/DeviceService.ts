/**
 * 设备服务实现类
 * @author: yichen9248
 */
export class DeviceService {
	getApplicationCacheSize = (): number => {
		if (typeof plus !== "undefined") {
			plus.cache.calculate((size: number) => {
		    	if (size < 1024) {
		    		return `${size}B`;
		    	} else if (size / 1024 >= 1 && size / 1024 / 1024 < 1) {
		    		return `${Math.floor((size / 1024) * 100) / 100}KB`;
		    	} else if (size / 1024 / 1024 >= 1) {
		    		return `${Math.floor((size / 1024 / 1024) * 100) / 100}M`;
		    	}
		    });
		} else return uni.getStorageInfoSync().currentSize;
	}
}