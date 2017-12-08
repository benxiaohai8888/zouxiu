package cn.sz.hcq.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import cn.sz.hcq.dao.IUserDAO;
import cn.sz.hcq.pojo.User;

@Repository
public class UserDAOImpl extends HibernateDaoSupport implements IUserDAO {

	public void addUser(User user) {
		super.getHibernateTemplate().saveOrUpdate(user);
	}

	@SuppressWarnings("unchecked")
	public List<User> findAllUsers(Integer cp, Integer ps) {
		DetachedCriteria dc = DetachedCriteria.forClass(User.class);
		List<User> list = (List<User>) super.getHibernateTemplate()
				.findByCriteria(dc, (cp - 1) * ps, ps);
		return list;
	}

	@SuppressWarnings("unchecked")
	public User findUserById(Integer uid) {
		DetachedCriteria dc = DetachedCriteria.forClass(User.class);
		dc.add(Restrictions.eq("uid", uid));
		List<User> list = (List<User>) super.getHibernateTemplate()
				.findByCriteria(dc);
		if (list != null && list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

	@SuppressWarnings("unchecked")
	public User checkLoginNameIsExist(String loginName) {
		List<User> list = (List<User>) super.getHibernateTemplate().find(
				"from User where loginName=?", loginName);
		if (list != null && list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

}
