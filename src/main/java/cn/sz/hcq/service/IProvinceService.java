package cn.sz.hcq.service;

import java.util.List;

import cn.sz.hcq.pojo.Province;

public interface IProvinceService {
	/**
	 * 查询所有的省份
	 * 
	 * @return
	 */
	public List<Province> findAllProvince();
}
