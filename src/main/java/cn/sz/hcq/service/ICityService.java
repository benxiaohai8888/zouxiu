package cn.sz.hcq.service;


public interface ICityService {
	/**
	 * 根据省编号查询市
	 */
	public String findCityByProvinceId(String provinceId);
	/**
	 * 根据省编号查询q区
	 */
	public String findAreaByCityId(String cityId);
}
