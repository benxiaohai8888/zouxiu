package cn.sz.hcq.service;

import java.util.List;

import cn.sz.hcq.pojo.User;

public interface IUserService {
	/**
	 * 添加用户
	 * 
	 * @param user
	 */
	public void addUser(User user);

	/**
	 * 查询所有用户
	 * 
	 * @return
	 */
	public List<User> findAllUsers(Integer cp, Integer ps);

	/**
	 * 检查用户名是否注册
	 * 
	 * @param loginName
	 * @return
	 */
	public User checkLoginNameIsExist(String loginName);
}
