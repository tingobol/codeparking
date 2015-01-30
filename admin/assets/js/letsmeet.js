/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function showPopup(selector, layer)
{
	var left = ($(window).width() - $(selector).width()) / 2 + $(window).scrollLeft() - 22;
	var top = ($(window).height() - $(selector).height()) / 2 + $(window).scrollTop() - 22;
	if (left < 0)
	{
		left = 0;
	}
	if (top < 0)
	{
		top = 0;
	}
	$(selector).css({'left' : left + "px"});
	$(selector).css({'top' : top + "px"});
	$(layer).show();
	$(selector).show();
}

function hidePopup(selector, layer)
{
	$(selector).hide();
	$(layer).hide();
}
function __createElement(tag, cls, id, name)
{
	var ele;
	ele = document.createElement(tag);
	if(cls != "")
		ele.className = cls;
	if(id != "")
		ele.id = id;
	if(name != "")
		ele.name = name;
	return ele;
};

function SetLocation()
{

	var frm = document.frmlocation;
	var overlay = document.getElementById("overlay");
	var locValue = frm.txtLocation.value;
	if(locValue.indexOf("(") == -1)
	{
		var sendVal = locValue;
	}
	else
	{
		var arrlocValue = locValue.split("(");
		var sendVal = arrlocValue[0].trim();

	}

	if(sendVal == "")
	{
		alert("Please select / mention a location");
		return false;
	}
	else
	{
		overlay.style.display ="";
		var showAction =BASEURL+"customers/setlocation/"+sendVal;
		xmlhttp = initAjax();
		xmlhttp.onreadystatechange = function()
		{
			if(xmlhttp.readyState==4)
			{	
				var overlay = document.getElementById("overlay");
				overlay.style.display ="none";

				if(xmlhttp.responseText != "")
				{
					frm.submit();
				}
				else
				{
					alert("Location counld not be set.");
					return false;
				}
			}
		}
		url = showAction;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		return false;	
	}

};
function getAllElementsWithAttribute(attribute,value)
{
	var matchingElements = [];
	var allElements = document.getElementsByTagName('*');
	for (var i = 0, n = allElements.length; i < n; i++)
	{
		if (allElements[i].getAttribute(attribute) && allElements[i].attributes[attribute].value == value)
		{
			matchingElements.push(allElements[i]);
		}
	}
	return matchingElements;
}
function toggleShow(value,element)
{
	var cssclass = "visible";
	if(element.checked)
		cssclass = "hidden";
	var elements = getAllElementsWithAttribute('for',value);
	for(var i=0; i < elements.length;i++)
	{
		if(elements[i].attributes['class'].value == "hidden" || elements[i].attributes['class'].value == "visible")
			elements[i].attributes['class'].value = cssclass;
	}
};

function submitForm(formId)
{
	switch(formId)
	{
		case "addCustomerForm":
			var frm  = document.forms[formId];
			var html = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>";
			html="";
			var eleError = __createElement("div","form-error");
			if(frm.showToggle[0].checked)
			{
				frm.ShippingName.value = frm.firstName.value +" "+frm.lastName.value;
				frm.shippingaddress1.value = frm.address1.value ;
				frm.shippingaddress2.value = frm.address2.value;
				frm.shippingcountry.value = frm.country.options[frm.country.selectedIndex].value;
				frm.shippingstate.value = frm.state.options[frm.state.selectedIndex].value;
				frm.shippingcity.value = frm.city.value;
				frm.shippingzip.value = frm.zip.value;
				frm.shippingphoneWork.value = frm.phoneWork.value;
			}
			else
			{

				if(frm.ShippingName.value == "")
				{
					////$('#error-msg').css({"display":"block"});
					////$('#error-msg').html(html + frm.ShippingName.attributes["placeholder"].value + " INVALID");
					eleError.innerHTML = frm.ShippingName.attributes["placeholder"].value + " INVALID !!!";
					frm.ShippingName.parentNode.appendChild(eleError);
					return false;
				}
				else if(frm.shippingaddress1.value == "")
				{
					eleError.innerHTML = frm.shippingaddress1.attributes["placeholder"].value + " INVALID !!!";
					frm.shippingaddress1.parentNode.appendChild(eleError);
					return false;
				}
				else if(frm.shippingaddress2.value == "")
				{
					eleError.innerHTML = frm.shippingaddress2.attributes["placeholder"].value + " INVALID !!!";
					frm.shippingaddress2.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.shippingaddress1.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.shippingcountry.value == "")
				{
					eleError.innerHTML = frm.shippingcountry.attributes["placeholder"].value + " INVALID !!!";
					frm.shippingcountry.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.shippingaddress2.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.shippingstate.value == "")
				{
					eleError.innerHTML = frm.shippingstate.attributes["placeholder"].value + " INVALID !!!";
					frm.shippingstate.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.shippingcountry.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.shippingcity.value == "")
				{
					eleError.innerHTML = frm.shippingcity.attributes["placeholder"].value + " INVALID !!!";
					frm.shippingcity.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.shippingstate.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.shippingzip.value == "")
				{
					eleError.innerHTML = frm.shippingzip.attributes["placeholder"].value + " INVALID !!!";
					frm.shippingzip.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.shippingcity.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.shippingphoneWork.value == "")
				{
					eleError.innerHTML = frm.shippingphoneWork.attributes["placeholder"].value + " INVALID !!!";
					frm.shippingphoneWork.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.shippingzip.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.shippingphoneHome.value == "")
				{
					eleError.innerHTML = frm.shippingphoneHome.attributes["placeholder"].value + " INVALID !!!";
					frm.shippingphoneHome.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.shippingphoneWork.attributes["placeholder"].value + " INVALID");
					return false;
				}



			}
			if(frm.showToggle[1].checked)
			{

				frm.billingaddress1.value = frm.address1.value ;
				frm.billingaddress2.value = frm.address2.value;
				frm.billingcountry.value = frm.country.options[frm.country.selectedIndex].value ;
				frm.billingstate.value = frm.state.options[frm.state.selectedIndex].value;
				frm.billingcity.value = frm.city.value;
				frm.billingzip.value = frm.zip.value;
				frm.billingphoneWork.value = frm.phoneWork.value;
			}
			else
			{


				if(frm.billingaddress1.value == "")
				{
					eleError.innerHTML = frm.billingaddress1.attributes["placeholder"].value + " INVALID !!!";
					frm.billingaddress1.parentNode.appendChild(eleError);
					return false;
				}
				else if(frm.billingaddress2.value == "")
				{
					eleError.innerHTML = frm.billingaddress2.attributes["placeholder"].value + " INVALID !!!";
					frm.billingaddress2.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.billingaddress1.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.billingcountry.value == "")
				{
					eleError.innerHTML = frm.billingcountry.attributes["placeholder"].value + " INVALID !!!";
					frm.billingcountry.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.billingaddress2.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.billingstate.value == "")
				{
					eleError.innerHTML = frm.billingstate.attributes["placeholder"].value + " INVALID !!!";
					frm.billingstate.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.billingcountry.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.billingcity.value == "")
				{
					eleError.innerHTML = frm.billingcity.attributes["placeholder"].value + " INVALID !!!";
					frm.billingcity.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.billingstate.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.billingzip.value == "")
				{
					eleError.innerHTML = frm.billingzip.attributes["placeholder"].value + " INVALID !!!";
					frm.billingzip.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.billingcity.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.billingphoneWork.value == "")
				{
					eleError.innerHTML = frm.billingphoneWork.attributes["placeholder"].value + " INVALID !!!";
					frm.billingphoneWork.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.billingzip.attributes["placeholder"].value + " INVALID");
					return false;
				}
				else if(frm.billingphoneHome.value == "")
				{
					eleError.innerHTML = frm.billingphoneHome.attributes["placeholder"].value + " INVALID !!!";
					frm.billingphoneHome.parentNode.appendChild(eleError);
					//$('#error-msg').css({"display":"block"});
					//$('#error-msg').html(html + frm.billingphoneWork.attributes["placeholder"].value + " INVALID");
					return false;
				}


			}
			if(frm.password.value == "" || (frm.password.value != frm.cnfpassword.value))
			{
				eleError.innerHTML = "Password / Confirm Password invalid !!!";
				frm.password.parentNode.appendChild(eleError);
				return false;
			}

			var formData = $(addCustomerForm).serialize();
			return true;
			break;
		case  "savePersonnelDetails":
			var frm  = document.forms[formId];
			var html = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>";
			html="";
			var eleError = __createElement("div","form-error");
			if(frm.ShippingName.value == "")
			{
				eleError.innerHTML = frm.ShippingName.attributes["placeholder"].value + " INVALID !!!";
				frm.ShippingName.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.shippingaddress1.value == "")
			{
				eleError.innerHTML = frm.shippingaddress1.attributes["placeholder"].value + " INVALID !!!";
				frm.shippingaddress1.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.shippingaddress2.value == "")
			{
				eleError.innerHTML = frm.shippingaddress2.attributes["placeholder"].value + " INVALID !!!";
				frm.shippingaddress2.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.shippingcountry.value == "")
			{
				eleError.innerHTML = frm.shippingcountry.attributes["placeholder"].value + " INVALID !!!";
				frm.shippingcountry.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.shippingstate.value == "")
			{
				eleError.innerHTML = frm.shippingstate.attributes["placeholder"].value + " INVALID !!!";
				frm.shippingstate.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.shippingcity.value == "")
			{
				eleError.innerHTML = frm.shippingcity.attributes["placeholder"].value + " INVALID !!!";
				frm.shippingcity.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.shippingzip.value == "")
			{
				eleError.innerHTML = frm.shippingzip.attributes["placeholder"].value + " INVALID !!!";
				frm.shippingzip.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.shippingphoneWork.value == "")
			{
				eleError.innerHTML = frm.shippingphoneWork.attributes["placeholder"].value + " INVALID !!!";
				frm.shippingphoneWork.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.shippingphoneHome.value == "")
			{
				eleError.innerHTML = frm.shippingphoneHome.attributes["placeholder"].value + " INVALID !!!";
				frm.shippingphoneHome.parentNode.appendChild(eleError);
				return false;
			}
			if(frm.billingaddress1.value == "")
			{
				eleError.innerHTML = frm.billingaddress1.attributes["placeholder"].value + " INVALID !!!";
				frm.billingaddress1.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.billingaddress2.value == "")
			{
				eleError.innerHTML = frm.billingaddress2.attributes["placeholder"].value + " INVALID !!!";
				frm.billingaddress2.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.billingcountry.value == "")
			{
				eleError.innerHTML = frm.billingcountry.attributes["placeholder"].value + " INVALID !!!";
				frm.billingcountry.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.billingstate.value == "")
			{
				eleError.innerHTML = frm.billingstate.attributes["placeholder"].value + " INVALID !!!";
				frm.billingstate.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.billingcity.value == "")
			{
				eleError.innerHTML = frm.billingcity.attributes["placeholder"].value + " INVALID !!!";
				frm.billingcity.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.billingzip.value == "")
			{
				eleError.innerHTML = frm.billingzip.attributes["placeholder"].value + " INVALID !!!";
				frm.billingzip.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.billingphoneWork.value == "")
			{
				eleError.innerHTML = frm.billingphoneWork.attributes["placeholder"].value + " INVALID !!!";
				frm.billingphoneWork.parentNode.appendChild(eleError);
				return false;
			}
			else if(frm.billingphoneHome.value == "")
			{
				eleError.innerHTML = frm.billingphoneHome.attributes["placeholder"].value + " INVALID !!!";
				frm.billingphoneHome.parentNode.appendChild(eleError);
				return false;
			}


			var formData = $(addCustomerForm).serialize();
			return true;
			break;
	}
};

function initAjax()
{
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
};

function sendRequest(type) 
{
	if(type == 0)
		var frm = document.frmLogin;

	var email = frm.username.value;
	var pwd = frm.password.value;
	if(email.length == 0) 
	{
		alert("Please enter your EmailAddress /a username.");
		return false;
	}
	else if (password.length == 0)
	{
		alert("Please enter your Passowrd");
		return false;
	}
	else
	{

		var frmAction =BASEURL+"login/checkaccess/";
		xmlhttp = initAjax();
		xmlhttp.onreadystatechange = function() { if(xmlhttp.readyState==4){loginResponse();} }
		url = frmAction+btoa(email)+"/"+btoa(pwd);
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		return false;
	}
};
function loginResponse()
{
	if(xmlhttp.responseText == 1)
	{
		$('#frmLogin').submit() ;
	}
	else
	{
		alert("Invalid Login Details !!! Try again ");

	}
};



