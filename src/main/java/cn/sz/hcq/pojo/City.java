package cn.sz.hcq.pojo;

// Generated 2017-11-10 15:16:25 by Hibernate Tools 4.0.0

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * ZxCity generated by hbm2java
 */
@Entity
@Table(name = "zx_city", catalog = "zouxiu")
public class City implements java.io.Serializable {

	private Integer id;
	private String cityId;
	private String city;
	private String father;

	public City() {
	}

	public City(String cityId, String city, String father) {
		this.cityId = cityId;
		this.city = city;
		this.father = father;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "cityID", length = 6)
	public String getCityId() {
		return this.cityId;
	}

	public void setCityId(String cityId) {
		this.cityId = cityId;
	}

	@Column(name = "city", length = 50)
	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Column(name = "father", length = 6)
	public String getFather() {
		return this.father;
	}

	public void setFather(String father) {
		this.father = father;
	}

}
