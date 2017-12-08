package cn.sz.hcq.pojo;

// Generated 2017-11-10 15:16:25 by Hibernate Tools 4.0.0

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * ZxArea generated by hbm2java
 */
@Entity
@Table(name = "zx_area", catalog = "zouxiu")
public class Area implements java.io.Serializable {

	private Integer id;
	private String areaId;
	private String area;
	private String father;

	public Area() {
	}

	public Area(String areaId, String area, String father) {
		this.areaId = areaId;
		this.area = area;
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

	@Column(name = "areaID", length = 50)
	public String getAreaId() {
		return this.areaId;
	}

	public void setAreaId(String areaId) {
		this.areaId = areaId;
	}

	@Column(name = "area", length = 60)
	public String getArea() {
		return this.area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	@Column(name = "father", length = 6)
	public String getFather() {
		return this.father;
	}

	public void setFather(String father) {
		this.father = father;
	}

}
