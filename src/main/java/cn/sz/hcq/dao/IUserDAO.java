package cn.sz.hcq.dao;

import java.util.List;

import cn.sz.hcq.pojo.User;

public interface IUserDAO {
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
	 * 根据用户编号查询用户
	 * 
	 * @return
	 */
	public User findUserById(Integer uid);

	/**
	 * 检查用户名是否注册
	 * 
	 * @param loginName
	 * @return
	 */
	public User checkLoginNameIsExist(String loginName);
}
