package cn.sz.hcq.dao;

import java.util.List;

import cn.sz.hcq.pojo.Province;

public interface IProvinceDAO {
	/**
	 * 查询所有的省份
	 * 
	 * @return
	 */
	public List<Province> findAllProvince();
}
