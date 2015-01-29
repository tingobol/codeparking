<?php
class Users_model extends CI_Model
{

	function __construct()
	{
		parent::__construct();
	}
	function insertUsers()
	{

		$EmailAddress= trim($this->input->post("email"));
		if(trim($EmailAddress) == "")
		{       
			$data['result'] = "Email Address Invalid.<br />";
			$data['id'] = "emailid";
			$data['status'] = "failure";
			return $data;

		}
		$UserName= trim($this->input->post("username"));
		if(trim($UserName) == "")
		{       
			$data['result'] = "User name Invalid.<br />";
			$data['id'] = "username";
			$data['status'] = "failure";
			return $data;

		}
		$Password= trim($this->input->post("password"));
		if(trim($Password) == "")
		{       
			$data['result'] = "Password Invalid.<br />";
			$data['id'] = "password";
			$data['status'] = "failure";
			return $data;

		}
		$companyname = trim($this->input->post("companyname"));
		if(trim($companyname) == "")
		{       
			$data['result'] = "Company Name Invalid.<br />";
			$data['id'] = "companyname";
			$data['status'] = "failure";
			return $data;

		}

		//LMUserid 	LMPassword 	LMRole 0-LMSuperAdmin,1-CompanyAdmin	LMLoginEnabled 	LMCreatedOn 	LMCreatedBy 			

		$numRows = $this->db->where("LMUserid = '".trim($UserName)."' or '".trim($EmailAddress)."'")->get('LMLoginUsers')->num_rows();
		if($numRows >0 )
		{	 
			$data['result'] = "User (<b>".$EmailAddress."</b>) Or (<b>".$UserName."</b>) already exists.<br />";
			$data['status'] = "failure";
			$data['id'] = "emailid";
			return $data;

		}

		$date = date('Y-m-d H:i:s');
		$this->db->set('LMUserid', trim($UserName));
		$this->db->set('LMEmailAddress', trim($EmailAddress));
		$this->db->set('LMPassword', trim($Password));
		$this->db->set('LMRole', '1');
		$this->db->set('LMLoginEnabled', '0');
		$this->db->set('LMCreatedOn', trim($date));
		$this->db->set('LMCreatedBy', 'website');
		$this->db->insert('LMLoginUsers');
		$result = '';


		$data['result'] = "User (<b>".$EmailAddress."</b>) Please Login.<br />";
		$data['status'] = "success";
		return $data;

		print "came here";
		exit;





	}
	
}

