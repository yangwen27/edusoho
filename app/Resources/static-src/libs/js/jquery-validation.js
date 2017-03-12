import 'jquery-validation';

$.validator.setDefaults({
  errorClass: 'form-error-message jq-validate-error',
  errorElement: 'p',
  onkeyup: false,
  ignore: '',
  ajax: false,
  currentDom: null,
  highlight: function (element, errorClass, validClass) {
    let $row = $(element).addClass('form-control-error').closest('.form-group').addClass('has-error');
    $row.find('.help-block').hide();
  },
  unhighlight: function (element, errorClass, validClass) {
    let $row = $(element).removeClass('form-control-error').closest('.form-group');
    $row.removeClass('has-error');
    $row.find('.help-block').show();
  },
  errorPlacement: function (error, element) {
    if (element.parent().hasClass('controls')) {
      element.parent('.controls').append(error);
    } else if (element.parent().hasClass('input-group')) {
      element.parent().after(error);
    } else if (element.parent().is('label')) {
      element.parent().parent().append(error);
    } else {
      element.parent().append(error);
    }
  },
  submitError: function () {
    console.log('submitError');
  },
  submitSuccess: function (data) {
    console.log('submitSuccess');
  },
  submitHandler: function (form) {
    console.log('submitHandler');

    //规定全局不要用 submit按钮（<input type=’submit’>）提交表单；
    let $form = $(form);
    let settings = this.settings;
    $(settings.currentDom) ? $(settings.currentDom).button('loading') : '';
    if (settings.ajax) {
      $.post($form.attr('action'), $form.serializeArray(), (data) => {
        settings.submitSuccess(data);
      }).error(() => {
        settings.currentDom ? $(settings.currentDom).button('reset') : '';
        settings.submitError();
      });
    } else {
      form.submit();
      settings.currentDom ? $(settings.currentDom).button('reset') : '';
    }
  }
});

$.extend($.validator.prototype, {
  defaultMessage: function (element, rule) {
    if (typeof rule === "string") {
      rule = { method: rule };
    }

    var message = this.findDefined(
      this.customMessage(element.name, rule.method),
      this.customDataMessage(element, rule.method),

      // 'title' is never undefined, so handle empty string as undefined
      !this.settings.ignoreTitle && element.title || undefined,
      $.validator.messages[rule.method],
      "<strong>Warning: No message defined for " + element.name + "</strong>"
    ),
      theregex = /\$?\{(\d+)\}/g,
      displayregex = /%display%/g;
    if (typeof message === "function") {
      message = message.call(this, rule.parameters, element);
    } else if (theregex.test(message)) {
      message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
    }

    if (displayregex.test(message)) {
      var labeltext, name;
      var id = $(element).attr("id");
      if (id) {
        labeltext = $("label[for=" + id + "]").text();
        if (labeltext) {
          labeltext = labeltext.replace(/^[\*\s\:\：]*/, "").replace(/[\*\s\:\：]*$/, "");
        }
      }

      name = $(element).data('display') || $(element).attr("name");
      message = message.replace(displayregex, labeltext || name)
    }

    return message;
  }

});


$.extend($.validator.messages, {
  required: "请输入%display%",
  remote: "请修正此字段",
  email: "请输入有效的电子邮件地址",
  url: "请输入有效的网址",
  date: "请输入有效的日期",
  dateISO: "请输入有效的日期 (YYYY-MM-DD)",
  number: "请输入有效的数字",
  digits: "只能输入整数",
  creditcard: "请输入有效的信用卡号码",
  equalTo: "你的输入不相同",
  extension: "请输入有效的后缀",
  maxlength: $.validator.format("最多可以输入 {0} 个字符"),
  minlength: $.validator.format("最少要输入 {0} 个字符"),
  rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
  range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
  max: $.validator.format("请输入不大于 {0} 的数值"),
  min: $.validator.format("请输入不小于 {0} 的数值")
});

function strlen(str) {  
  let len = 0;  
  for (let i = 0; i < str.length; i++) {   
    let chars = str.charCodeAt(i);   
    //单字节加1   
    if ((chars >= 0x0001 && chars <= 0x007e) || (0xff60 <= chars && chars <= 0xff9f)) {   
      len ++;   
    } else {   
      len += 2;   
    }   
  }   
  return len;  
}

$.validator.addMethod("trim", function (value, element, params) {
  return $.trim(value).length > 0;
}, jQuery.validator.format("请输入%display%"));

$.validator.addMethod("idcardNumber", function (value, element, params) {
  let _check = function (idcardNumber) {
    let reg = /^\d{17}[0-9xX]$/i;
    if (!reg.test(idcardNumber)) {
      return false;
    }
    let n = new Date();
    let y = n.getFullYear();
    if (parseInt(idcardNumber.substr(6, 4)) < 1900 || parseInt(idcardNumber.substr(6, 4)) > y) {
      return false;
    }
    let birth = idcardNumber.substr(6, 4) + "-" + idcardNumber.substr(10, 2) + "-" + idcardNumber.substr(12, 2);
    if (!'undefined' == typeof birth.getDate) {
      return false;
    }
    let IW = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    let iSum = 0;
    for (let i = 0; i < 17; i++) {
      iSum += parseInt(idcardNumber.charAt(i)) * IW[i];
    }
    let iJYM = iSum % 11;
    let sJYM = ''
    if (iJYM == 0) sJYM = '1';
    else if (iJYM == 1) sJYM = '0';
    else if (iJYM == 2) sJYM = 'x';
    else if (iJYM == 3) sJYM = '9';
    else if (iJYM == 4) sJYM = '8';
    else if (iJYM == 5) sJYM = '7';
    else if (iJYM == 6) sJYM = '6';
    else if (iJYM == 7) sJYM = '5';
    else if (iJYM == 8) sJYM = '4';
    else if (iJYM == 9) sJYM = '3';
    else if (iJYM == 10) sJYM = '2';
    let cCheck = idcardNumber.charAt(17).toLowerCase();
    if (cCheck != sJYM) {
      return false;
    }
    return true;
  }
  return this.optional(element) || _check(value);
}, "请正确输入您的身份证号码");

$.validator.addMethod("visible_character", function (value, element, params) {
  return this.optional(element) || $.trim(value).length > 0;
}, jQuery.validator.format("请输入可见性字符"));

$.validator.addMethod('positive_integer', function (value, element) {
  return this.optional(element) || parseInt(value) > 0;
}, jQuery.validator.format("请输入正整数"));

$.validator.addMethod('float', function (value, element) {
  return this.optional(element) || /^(([+-]?[1-9]{1}\d*)|([+-]?[0]{1}))(\.(\d){1,2})?$/i.test(value);
}, jQuery.validator.format("请输入正确的小数,只保留到两位小数"));

$.validator.addMethod('date', function (value, element) {
  return this.optional(element) || /^\d{4}\-[01]?\d\-[0-3]?\d$|^[01]\d\/[0-3]\d\/\d{4}$|^\d{4}年[01]?\d月[0-3]?\d[日号]$/.test(value);
}, jQuery.validator.format("请输入正确的日期"));

$.validator.addMethod("open_live_course_title", function (value, element, params) {
  return !params || /^[^(<|>|'|"|&|‘|’|”|“)]*$/.test(value);
}, Translator.trans('直播公开课标题暂不支持<、>、\"、&、‘、’、”、“字符'));

$.validator.addMethod("currency", function (value, element, params) {
  return this.optional(element) || /^[0-9]{0,8}(\.\d{0,2})?$/.test(value);
}, jQuery.validator.format('请输入有效价格，最多两位小数，整数位不超个8位！'));

$.validator.addMethod("positive_currency", function (value, element, params) {
  return value > 0 && /^[0-9]{0,8}(\.\d{0,2})?$/.test(value);
}, jQuery.validator.format('请输入大于0的有效价格，最多两位小数，整数位不超个8位！'));

$.validator.addMethod('qq', function(value, element) {
  return this.optional(element) || /^[1-9]\d{4,}$/.test(value);
}, jQuery.validator.format('请输入正确的QQ号'));

$.validator.addMethod('mobile', function(value, element) {
  return this.optional(element) ||  /^1\d{10}$/.test(value);
}, jQuery.validator.format('请输入正确的手机号'));

$.validator.addMethod('url', function(value, element) {
  return this.optional(element) || /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(value)
}, jQuery.validator.format('地址不正确，须以http://或者https://开头。'));

$.validator.addMethod('passwordCheck', function(value, element) {
  
  let url = $(element).data('url') ? $(element).data('url') : null;
  let type = $(element).data('type') ? $(element).data('type') : 'POST';
  let isSuccess = 0;

  $.ajax({
    url: url,
    type: type,
    async: false,
    data: {value: value},
    dataType: 'json'
  })
  .success(function(response) {
    isSuccess = response.success;
  })

  return this.optional(element) || isSuccess
}, jQuery.validator.format('密码错误'))

$.validator.addMethod('chinese', function(value, element) {
  return this.optional(element) ||  /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$/i.test(value);
}, jQuery.validator.format('必须是中文字'));

$.validator.addMethod('chinese_limit', function(value, element, params) {
  let l = strlen(value);
  console.log('params',params)
  return this.optional(element) ||  l <= Number(params);
}, jQuery.validator.format('长度必须小于等于 {0} 字符,一个中文为2个字符'));

$.validator.addMethod('isImage', function(value, element) {

  if (navigator.userAgent.toLowerCase().indexOf('msie') > 0) {
    return this.optional(element) || true;
  }

  const imgType = ['jpg','JPG','jpeg','JPEG','bmp','BMP','gif','GIF','png','PNG'];

  // imgType = $(element).attr('accept').replace(/image\//g,"").split(',');

  for (let i = 0; i < imgType.length; i ++) {
    if(value.indexOf(imgType[i]) > 0) {
      return this.optional(element) || true;
    }
  }

}, jQuery.validator.format('只能上传图片'));

$.validator.addMethod('limitSize', function(value, element) {
  if (navigator.userAgent.toLowerCase().indexOf('msie') > 0) {
    return this.optional(element) || true;
  }

  const fileSize = $(element)[0]['files'][0].size;

  return this.optional(element) || fileSize / 1024 <= 2048;
  
}, jQuery.validator.format('大小不能超过2M'));

jQuery.validator.addMethod("max_year", function (value, element) {
  return this.optional(element) || value < 100000;
}, "有效期最大值不能超过99,999天");

$.validator.addMethod("feature", function (value, element, params) {
  return value && (new Date(value).getTime()) > Date.now();
},
  Translator.trans('购买截止时间需在当前时间之后')
);

$.validator.addMethod("next_day", function (value, element, params) {
  let now = new Date();
  let next = new Date(now + 86400 * 1000);
  return value && next <= new Date(value);
},
  Translator.trans('开始时间应晚于当前时间')
);

$.validator.addMethod("chinese_alphanumeric", function (value, element, params) {
  return this.optional(element) || /^([\u4E00-\uFA29]|[a-zA-Z0-9_.·])*$/i.test(value)
}, jQuery.validator.format('支持中文字、英文字母、数字及_ . ·'));


$.validator.addMethod("nickname", function (value, element, params) {

  return  this.optional(element) || ! /^1\d{10}$/.test(value)
}, jQuery.validator.format('不允许以1开头的11位纯数字'));


$.validator.addMethod("nickname_remote", function (value, element, params) {
  let isSuccess = 0;

  let url = $(element).data('url') ? $(element).data('url') : null;

  $.ajax({
    url: url,
    type: 'GET',
    async: false,
    data: {value: value},
    dataType: 'json'
  })
  .success(function(response) {
    isSuccess = response.success;
  })

  return this.optional(element) || isSuccess;

}, jQuery.validator.format('该用户名已存在'))
