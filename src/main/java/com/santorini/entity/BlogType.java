package com.santorini.entity;

/**
 * 博客类型实体
 * @author Shenzhao
 *
 */
public class BlogType {
	
	private Integer id;//编号
	private String typeName;//类型
	private Integer orderNo;//排名序号
	private Integer blogCount;//博客数量
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public Integer getOrderNo() {
		return orderNo;
	}
	public void setOrderNo(Integer orderNo) {
		this.orderNo = orderNo;
	}
	public Integer getBlogCount() {
		return blogCount;
	}
	public void setBlogCount(Integer blogCount) {
		this.blogCount = blogCount;
	}

}
