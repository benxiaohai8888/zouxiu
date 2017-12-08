package cn.sz.hcq.dao;

import java.util.List;

import cn.sz.hcq.pojo.City;

public interface ICityDAO {
	/**
	 * 根据省编号查询市
	 */
	public List<City> findCityByProvinceId(String provinceId);
	/**
	 * 根据省编号查询区
	 */
	public List<City> findAreaByCityId(String cityId);
}
