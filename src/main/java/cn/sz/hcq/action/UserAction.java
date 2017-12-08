package cn.sz.hcq.action;

import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import cn.sz.hcq.pojo.Province;
import cn.sz.hcq.pojo.User;
import cn.sz.hcq.service.ICityService;
import cn.sz.hcq.service.IProvinceService;
import cn.sz.hcq.service.IUserService;

import com.opensymphony.xwork2.ActionSupport;

@Service
@ParentPackage(value = "default")
@Namespace(value = "/")
@Scope(value = "prototype")
public class UserAction extends ActionSupport {
	private IUserService userServiceImpl;
	private IProvinceService provinceServiceImpl;
	private ICityService cityServiceImpl;
	// 接收用户信息
	private User user;

	private List<User> allUsers;

	private Integer cp = 1;
	private Integer ps = 5;
	// 查询到的所有省份
	private List<Province> allProvince;

	// 接收用户要查询 的省编号
	private String provinceId;

	// 接收用户要查询 的市编号
	private String cityId;
	// 查询到的市
	private String citys;
	// 查询到的区
	private String areas;

	// 用户名
	private String loginName;

	// 提示信息
	private String msg;

	/**
	 * 添加用户
	 * 
	 * @return
	 */
	@Action(value = "user_add", results = {
			@Result(name = "success", location = "/suc.jsp"),
			@Result(name = "input", type = "chain", location = "userAddCheckProvinces") })
	public String addUser() {
		try {
			User userIsExist = userServiceImpl.checkLoginNameIsExist(user
					.getLoginName());
			if (userIsExist == null) {
				userServiceImpl.addUser(user);
				msg = "添加成功";
			} else {
				msg = "用户名已经存在";
				return "input";
			}
		} catch (Exception e) {
			msg = "添加失败";
		}
		return "success";
	}

	/**
	 * 查询所有用户
	 * 
	 * @return
	 */
	@Action(value = "findAllUsers", results = {
			@Result(name = "success", location = "/user_manager.jsp"),
			@Result(name = "input", location = "/user_add.jsp") })
	public String findAllUsers() {
		allUsers = userServiceImpl.findAllUsers(cp, ps);
		return "success";
	}

	/**
	 * 查询省份
	 * 
	 * @return
	 */
	@Action(value = "userAddCheckProvinces", results = {
			@Result(name = "success", location = "/user_add.jsp"),
			@Result(name = "input", location = "/user_add.jsp") })
	public String userAddCheckProvinces() {
		allProvince = provinceServiceImpl.findAllProvince();
		return "success";
	}

	/**
	 * 根据省编号来查询他下面的市
	 * 
	 * @return
	 */
	@Action(value = "findCityByProvinceId", results = { @Result(name = "success", type = "json", params = {
			"root", "citys" }) })
	public String findCityByProvinceId() {
		citys = cityServiceImpl.findCityByProvinceId(provinceId);
		return "success";
	}

	/**
	 * 根据市编号来查询他下面的区
	 * 
	 * @return
	 */
	@Action(value = "findAreaByCityId", results = { @Result(name = "success", type = "json", params = {
			"root", "areas" }) })
	public String findAreaByCityId() {
		areas = cityServiceImpl.findAreaByCityId(cityId);
		return "success";
	}

	/**
	 * 根据市编号来查询他下面的区
	 * 
	 * @return
	 */
	@Action(value = "checkLoginName", results = { @Result(name = "success", type = "json", params = {
			"root", "msg" }) })
	public String checkLoginName() {
		User userIsExist = userServiceImpl.checkLoginNameIsExist(loginName);
		if (userIsExist != null) {
			msg = "用户名已经存在";
		} else {
			msg = "恭喜你，帐号可以使用";
		}
		return "success";
	}

	public IUserService getUserServiceImpl() {
		return userServiceImpl;
	}

	public void setUserServiceImpl(IUserService userServiceImpl) {
		this.userServiceImpl = userServiceImpl;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<User> getAllUsers() {
		return allUsers;
	}

	public void setAllUsers(List<User> allUsers) {
		this.allUsers = allUsers;
	}

	public IProvinceService getProvinceServiceImpl() {
		return provinceServiceImpl;
	}

	public void setProvinceServiceImpl(IProvinceService provinceServiceImpl) {
		this.provinceServiceImpl = provinceServiceImpl;
	}

	public Integer getCp() {
		return cp;
	}

	public void setCp(Integer cp) {
		this.cp = cp;
	}

	public Integer getPs() {
		return ps;
	}

	public void setPs(Integer ps) {
		this.ps = ps;
	}

	public List<Province> getAllProvince() {
		return allProvince;
	}

	public void setAllProvince(List<Province> allProvince) {
		this.allProvince = allProvince;
	}

	public ICityService getCityServiceImpl() {
		return cityServiceImpl;
	}

	public void setCityServiceImpl(ICityService cityServiceImpl) {
		this.cityServiceImpl = cityServiceImpl;
	}

	public String getProvinceId() {
		return provinceId;
	}

	public void setProvinceId(String provinceId) {
		this.provinceId = provinceId;
	}

	public String getCitys() {
		return citys;
	}

	public void setCitys(String citys) {
		this.citys = citys;
	}

	public String getCityId() {
		return cityId;
	}

	public void setCityId(String cityId) {
		this.cityId = cityId;
	}

	public String getAreas() {
		return areas;
	}

	public void setAreas(String areas) {
		this.areas = areas;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
