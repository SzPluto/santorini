<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/bootstrap3/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/bootstrap3/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/blog.css">
<script src="${pageContext.request.contextPath}/static/bootstrap3/js/jquery-1.11.2.min.js"></script>
<script src="${pageContext.request.contextPath}/static/bootstrap3/js/bootstrap.min.js"></script>
<title>博客主页</title>
<style type="text/css">
	body{
		padding-top: 10px;
		padding-bottom: 40px;
	}
</style>
</head>
<body>
<div class="container">
	<!-- 抬头 -->
	<!-- <div class="row">
	  <div class="col-md-4">
	    <img alt="圣托里尼" src="${pageContext.request.contextPath}/static/images/logo.png">
	  </div>
	  <div class="col-md-8">
	    <iframe style="float:right"width="420" scrolling="no" height="60" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&icon=1&num=5&site=12"></iframe>
	  </div>
	</div>
	
	<!-- 导航栏 -->
	<div class="row">
	  <div class="col-md-12">
	 	 <nav class="navbar navbar-default">
		 <div class="container-fluid">
		    <!-- Brand and toggle get grouped for better mobile display -->
		    <div class="navbar-header">
		    	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span >
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
		    	</button>
		    	<a class="navbar-brand" href="#">首页</a>
		    </div>
		
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav">
		        <li class="active"><a href="#">aaaa <span class="sr-only">(current)</span></a></li>
		        <li><a href="#">呵呵</a></li>
		      </ul>
		      <form class="navbar-form navbar-right">
		        <div class="form-group">
		          <input type="text" class="form-control" placeholder="搜索">
		        </div>
		        <button type="submit" class="btn btn-default">搜索</button>
		      </form>
		    </div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
	  </div>
	</div>
	<!-- 博客内容 -->
	<div class="row">
	  <div class="col-md-9">
	  	<div class="data_list">
	  		<div class="data_list_title">
	  		<img src="${pageContext.request.contextPath}/static/images/list_icon.png">最新博客
	  		</div>  		
	  		<div class="datas">
	  			<ul>
	  				<li style="margin-bottom: 30px">
				  	<span class="date"><a href="${pageContext.request.contextPath}/blog/articles/349.html">2017年09月12日</a></span>
				  	<span class="title"><a href="${pageContext.request.contextPath}/blog/articles/349.html">Java操作ElasticSearch之Delete数据</a></span>
				  	<span class="summary">摘要: Java操作ElasticSearch之Delete数据ElasticSearch提供了根据索引名称，类别，文档ID来删除数据@Testpublic void testDelete(){	DeleteResponse response=client.prepareDelete("twitter", "twee...</span>
				  	<span class="img">				  		
				  	</span>
				  	<span class="info">发表于 2017-09-12 09:42 阅读(389) </span>
				 	</li>
				  	<hr style="height:5px;border:none;border-top:1px dashed gray;padding-bottom:  10px;" />
	  			</ul>
	  		</div>
	  	</div>
	  </div>
	  <div class="col-md-3">
	  	<!-- 博主信息 -->
	  	<div class="data_list">
			<div class="data_list_title">
				<img src="/static/images/user_icon.png"/>博主信息
			</div>
			<div class="user_image">
				<img src="/static/userImages/20160202095456.jpg"/>
			</div>
			<div class="nickName">${blogger.nickName}</div>
			<div class="userSign">${blogger.sign}</div>
		</div>
		<!-- 按日志类别 -->
		<div class="data_list">
			<div class="data_list_title">
				<img src="/static/images/byType_icon.png"/>按日志类别
			</div>
			<div class="datas">
				<ul>	
					<c:forEach var="blogTypeCount" items="${blogTypeCountList}">
						<li><span><a href="#">${blogTypeCount.typeName}(${blogTypeCount.blogCount})</a></span></li>	
					</c:forEach>										
				</ul>
			</div>
		</div>
		<!-- 按日志日期 -->	
		<div class="data_list">
			<div class="data_list_title">
				<img src="/static/images/byDate_icon.png"/>按日志日期
			</div>
			<div class="datas">
				<ul>					
					<c:forEach var="blogCount" items="${blogCountList}">
						<li><span><a href="#">${blogCount.releaseDateStr}(${blogCount.blogCount})</a></span></li>	
					</c:forEach>									
				</ul>
			</div>
		</div>	  	
	  </div>
	</div>
</div>
</body>
</html>