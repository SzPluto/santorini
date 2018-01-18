	<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<div class="data_list" >
 	<div class="data_list_title">
 	<h2 id="a"	style="padding-left:70px;margin-bottom: 30px">最新博客</h2>
 	</div>  		
 	<div class="datas">
 		<ul>
 			<c:forEach var="blog" items="${blogList}">
	 		<li style="margin-bottom: 30px;padding-left:80px;padding-right:80px;">
				<span class="date"><a href="${pageContext.request.contextPath}/blog/articles/${blog.id }.html#a"><fmt:formatDate value="${blog.releaseDate}" type="date" pattern="yyyy年MM月dd日"/></a></span>
				<span class="title" style="margin-bottom: 30px"><h3><a href="${pageContext.request.contextPath}/blog/articles/${blog.id }.html#a">${blog.title}</a></h3></span>
				<span class="summary"><h5>摘要:${blog.summary}...</h5></span>
				<!-- 
				<span class="img">				  		
				</span>
				 -->
				<span class="info">发表于<fmt:formatDate value="${blog.releaseDate}" type="date" pattern="yyyy-MM-dd HH:mm"/> 阅读(${blog.clickHit})</span>
			</li>
			<hr style="height:1px;border:none;border-top:1px solid #d5d5d5;" />
			</c:forEach>
 		</ul>
 	</div>
</div>
<div align="center">
<nav>
	<ul class="pagination"  >
  	${pageCode}
	</ul>
</nav>
</div>