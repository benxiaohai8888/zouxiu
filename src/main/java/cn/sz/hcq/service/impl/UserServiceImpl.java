package cn.sz.hcq.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import cn.sz.hcq.dao.IUserDAO;
import cn.sz.hcq.pojo.User;
import cn.sz.hcq.service.IUserService;

@Service
public class UserServiceImpl implements IUserService {

	private IUserDAO userDAOImpl;

	@Transactional(isolation = Isolation.READ_COMMITTED, timeout = 5, propagation = Propagation.REQUIRED, rollbackForClassName = { "java.Lang.Exception" })
	public void addUser(User user) {
		if (user == null) {
			return;
		}
		userDAOImpl.addUser(user);
	}

	public IUserDAO getUserDAOImpl() {
		return userDAOImpl;
	}

	public void setUserDAOImpl(IUserDAO userDAOImpl) {
		this.userDAOImpl = userDAOImpl;
	}

	public List<User> findAllUsers(Integer cp, Integer ps) {
		return userDAOImpl.findAllUsers(cp, ps);
	}

	public User checkLoginNameIsExist(String loginName) {
		if (loginName == null || loginName.equals("")) {
			return null;
		}
		return userDAOImpl.checkLoginNameIsExist(loginName);
	}

}
