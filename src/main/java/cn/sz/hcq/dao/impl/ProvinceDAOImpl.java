package cn.sz.hcq.dao.impl;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import cn.sz.hcq.dao.IProvinceDAO;
import cn.sz.hcq.pojo.Province;

@Repository
public class ProvinceDAOImpl extends HibernateDaoSupport implements
		IProvinceDAO {

	@SuppressWarnings("unchecked")
	public List<Province> findAllProvince() {
		System.out.println(11565);
		return (List<Province>) super.getHibernateTemplate().find("from Province");
//		DetachedCriteria dc = DetachedCriteria.forClass(Province.class);
//
//		return (List<Province>) super.getHibernateTemplate().findByCriteria(dc);
	}

}
