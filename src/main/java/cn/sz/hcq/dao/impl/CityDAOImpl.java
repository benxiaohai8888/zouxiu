package cn.sz.hcq.dao.impl;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import cn.sz.hcq.dao.ICityDAO;
import cn.sz.hcq.pojo.Area;
import cn.sz.hcq.pojo.City;

@Repository
public class CityDAOImpl extends HibernateDaoSupport implements ICityDAO {
	@SuppressWarnings("unchecked")
	public List<City> findCityByProvinceId(String provinceId) {
		DetachedCriteria dc = DetachedCriteria.forClass(City.class);
		dc.add(Restrictions.eq("father", provinceId));
		List<City> list = (List<City>) super.getHibernateTemplate()
				.findByCriteria(dc);
		return list;
	}

	@SuppressWarnings("unchecked")
	public List<City> findAreaByCityId(String cityId) {
		DetachedCriteria dc = DetachedCriteria.forClass(Area.class);
		dc.add(Restrictions.eq("father", cityId));
		List<City> list = (List<City>) super.getHibernateTemplate()
				.findByCriteria(dc);
		return list;
	}
}
