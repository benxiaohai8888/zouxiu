package cn.sz.hcq.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import cn.sz.hcq.dao.IProvinceDAO;
import cn.sz.hcq.pojo.Province;
import cn.sz.hcq.service.IProvinceService;

@Service
public class ProvinceServiceImpl implements IProvinceService {
	private IProvinceDAO provinceDAOImpl;

	public List<Province> findAllProvince() {
		return provinceDAOImpl.findAllProvince();
	}

	public IProvinceDAO getProvinceDAOImpl() {
		return provinceDAOImpl;
	}

	public void setProvinceDAOImpl(IProvinceDAO provinceDAOImpl) {
		this.provinceDAOImpl = provinceDAOImpl;
	}

}
