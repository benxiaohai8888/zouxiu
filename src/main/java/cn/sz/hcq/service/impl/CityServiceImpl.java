package cn.sz.hcq.service.impl;

import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Service;

import cn.sz.hcq.dao.ICityDAO;
import cn.sz.hcq.pojo.City;
import cn.sz.hcq.service.ICityService;

@Service
public class CityServiceImpl implements ICityService {
	private ICityDAO cityDAOImpl;

	public String findCityByProvinceId(String provinceId) {
		List<City> list = cityDAOImpl.findCityByProvinceId(provinceId);
		ObjectMapper oMapper = new ObjectMapper();
		String str = "";
		try {
			str = oMapper.writeValueAsString(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return str;
	}

	public ICityDAO getCityDAOImpl() {
		return cityDAOImpl;
	}

	public void setCityDAOImpl(ICityDAO cityDAOImpl) {
		this.cityDAOImpl = cityDAOImpl;
	}

	public String findAreaByCityId(String cityId) {
		List<City> list = cityDAOImpl.findAreaByCityId(cityId);
		ObjectMapper oMapper = new ObjectMapper();
		String str = "";
		try {
			str = oMapper.writeValueAsString(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return str;
	}

}
