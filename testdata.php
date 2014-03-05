<?php
class Model{
	public  $imgUrl;
	public  $num;
	public  $nickname;
	function Model(){

	}
}
	$data  = array();
	$oneData = new Model();
	$oneData->imgUrl = "http://localhost/wonderfulworld/wonderfulworld/2.png";
	$oneData->num = 1;
	$oneData->nickname = "abc";
	$data[] = $oneData;
		$oneData = new Model();
	$oneData->imgUrl = "http://localhost/wonderfulworld/wonderfulworld/2.png";
	$oneData->num = 3;
	$oneData->nickname = "abc";
	$data[] = $oneData;
	
	$oneData = new Model();
	$oneData->imgUrl = "http://localhost/wonderfulworld/wonderfulworld/2.png";
	$oneData->num = 6;
	$oneData->nickname = "aaaa";
	$data[] = $oneData;
		$oneData = new Model();
	$oneData->imgUrl = "http://localhost/wonderfulworld/wonderfulworld/2.png";
	$oneData->num = 1;
	$oneData->nickname = "kkk";
	$data[] = $oneData;
		$oneData = new Model();
	$oneData->imgUrl = "http://localhost/wonderfulworld/wonderfulworld/2.png";
	$oneData->num = 10;
	$oneData->nickname = "abasdc";
	$data[] = $oneData;
	echo json_encode($data);
?>