$(function () {
  let col = ["red", "aqua", "violet", "chartreuse", "teal", "darkolivegreen", "blue", "yellow", "pink", "brown", "black", "grey", "green", "purple", "orange", "olive", "lime", "cyan", "dodgerblue", "silver", "gold"];

  function colors() {
    for (let i = 0; i <= col.length; i++) {
      $(".colors").append(
        `<div class="color" style="background-color: ${col[i]} "></div>`
      );
    }
  };
  colors()
  //===================create box with images==================================================
  let im = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"];

  function create() {
    for (let i = 0; i < im.length; i++) {
      $(".imag").append(
        `<div class="create_bg"   style= "background: url( ${im[i]});background-size: cover "  ></div>`
      );
    }
  }
  create()
  //===================functions for fonts style ========================================*/

  $("#bold").click(() => {
    $(".main_box>p").toggleClass("bold");
  });

  $("#italic").click(() => {
    $(".main_box>p").toggleClass("italic");
  });

  $("#under").click(() => {
    $(".main_box>p").toggleClass("under");
  });
  $("#cross").click(() => {
    $(".main_box>p").toggleClass("cross");
  });

  //====================functions for text style=========================================

  $('.btn-group-text-align').bind('click', function (e) {
    if ($(e.target).hasClass('btn') || $(e.target).hasClass('fa')) {
      if ($(e.target).attr('data-align')) {
        let textAligh = $(e.target).attr('data-align')
        $(".main_box>p").css('text-align', textAligh)
      } else {
        let textAligh = $(e.target).parent().attr('data-align')
        $(".main_box>p").css({
          'text-align': textAligh
        })
      }
    }
  })

  //=======================text-color============================================================================

  $('.imag').on('click', 'div', function () {
    $('.main_box').css('background', '').css({
      'background-image': $(this).css("background-image")
    })
  })

  $('.colors').on('click', 'div', function () {
    let atrr = $(this).parents(' [data-color]').attr('data-color')
    $('.main_box').css(atrr, $(this).css("background-color"))
  })

  //=======================font-style=======================================================
  $("#fontS").on("click", 'li', function () {
    $('.main_box').css("font-family", $(this).text())
  });
  //=======================font-size=======================================================
  $("#size").on("click", 'li', function () {
    $('.main_box').css("font-size", $(this).text())
  });

  //=======================browser file=================================================================
  let mainBox = document.querySelector('.main_box')
  let f1 = document.forms['f1'];
  f1.file.onchange = function (event) {
    let url = URL.createObjectURL(event.target.files[0])
    mainBox.style.backgroundImage = `url(${url})`
  }


  //=====================================================================
  $('.col_t').on('click', function () {
    $(' .over_colors').show()
  })
  //=============choose сolor for background==================================
  $('.btn_show_color').on('click', function () {
    $('.over_colors_2').show()
    $('.over_image').hide()
    $('.over_files').hide()
  })
  //=============choose image for background==================================
  $('.btn_show_image').on('click', function () {
    $('.over_image').show()
    $('.over_colors_2').hide()
    $('.over_files').hide()
  })
  //==============choose file for background================================================
  $('.btn_show_file').on('click', function () {
    $('.over_files').show()
    $('.over_colors_2').hide()
    $('.over_image').hide()
  })
  //==============register form==============================================
  $('.sign').on('click', function () {
    if ($("#email").val() === 'admin' && $("#pwd").val() === 'admin') {
      $('#sign-in-modal').modal('hide');
      $("#email").removeClass('is-invalid');
      $("#pwd").removeClass('is-invalid')
      $('.empty').hide();
      $('.check_pl').hide();
      $("#reg").trigger('reset');
    } else if ($("#email").val() === '' || $("#pwd").val() === '') {
      $("#email").addClass('is-invalid');
      $("#pwd").addClass('is-invalid');
      $('.empty').show();
    } else {
      $("#email").addClass('is-invalid');
      $("#pwd").addClass('is-invalid');
      $('.empty').hide();
      $('.check_pl').show();
    }
  })
  //===============click first buttton=============================================
  $('.arrow1').on('click', function () {
    $('.main_box').hide();
    $('.bt').hide();
    $('.down').show();
    $('#area').val($('.main_box').html());
  })
  //===================button value ==========================================
  $('#page_back').on('click', () => {
    $('.down').hide();
    $('.main_box').show();
    $('.bt').show();
    $('.main_box').html($('#area').val())
  })
  //==================create table====================================================================
  let hid = document.querySelector(".hid");
  let createTable = document.querySelector(".createTable");
  createTable.onclick = function () {
    tads();
  }

  function tads() {
    let num = $(".num");
    let allow = true;
    for (let i = 0; i < num.length; i++) {
      if (num[i].value === "" || isNaN(num[i].value)) {
        $(num[i]).addClass('is-invalid')
        $('.valid_val').show();
        allow = false;
      } else if (num[i].value != "" || isNaN(num[i].value == false)) {
        $(num[i]).removeClass('is-invalid')
        allow = true;
      }
      if ($('.color_border option:selected').val() == 'choose color') {
        $('.color_border').addClass('is-invalid')
        allow = false;
      } else {
        if ($('.color_border').hasClass('is-invalid')) {
          $('.color_border').removeClass('is-invalid')
          allow = false;
        }
      }
      if ($('.type_border option:selected').val() == 'choose style') {
        $('.type_border').addClass('is-invalid')
        allow = false;
      } else {
        if ($('.type_border').hasClass('is-invalid')) {
          $('.type_border').removeClass('is-invalid')
         
        }
      };
    }
    if (allow) {
      let tabl = document.createElement("table");
      let tbd = document.createElement("tbody");
      hid.appendChild(tabl);
      tabl.appendChild(tbd);
      let htd = document.querySelector(".height_td");
      let wtd = document.querySelector(".width_td");
      let countTD = document.querySelector(".count_td");
      let countTR = document.querySelector(".count_tr");
      let f2 = document.forms["f2"];
      for (i = 0; i < countTR.value; i++) {
        let tr = document.createElement("tr");
        tbd.appendChild(tr);
        for (j = 0; j < countTD.value; j++) {
          let td = document.createElement("td");
          tr.appendChild(td);
          td.textContent = "TD";
          td.style.width = wtd.value + "px";
          td.style.height = htd.value + "px";

          let typB = document.querySelector(".type_border");
          td.style.border = typB.options[typB.selectedIndex].value;
          let cBr = document.querySelector(".color_border");
          td.style.borderColor = cBr.options[cBr.selectedIndex].value;
          td.style.borderWidth = f2.btd + "px";
        }
      }
      $('#area').val($('.main_box').html() + $('.hid').html());
      $('.createTable').attr('data-dismiss', 'modal')
      $('.valid_val').hide();
    }
  }

  $('#create_table').on('hidden.bs.modal', function (e) {
    $('.createTable').attr('data-dismiss', '')
    $('.valid_val').hide();
    $("#f2").trigger('reset');
  })

  $('.reset').on('click', function () {
    let num = $(".num");
    for (let i = 0; i < num.length; i++) {
      if (num[i].value === "" || isNaN(num[i].value)) {
        $(num[i]).removeClass('is-invalid')
      }
    }
    $("#f2").trigger('reset');
    $('.valid_val').hide();
    $('.type_border').removeClass('is-invalid');
    $('.color_border').removeClass('is-invalid')
  })

  //===============create list Ol=======================================================

  crListOl = function () {
    let allow = true;
    if ($('.num1').val() === "" || isNaN($('.num1').val()) === true) {
      $('.num1').addClass('is-invalid')
      $('.valid_val').show();
      allow = false;

    } else if ($('.num1').val() != "" || isNaN($('.num1').val()) == false) {
      $('.num1').removeClass('is-invalid');
    }

    if ($('.type_marks_oi option:selected').val() == 'choose OI type mark') {
      $('.type_marks_oi').addClass('is-invalid')
      allow = false;
    } else {
      if ($('.type_marks_oi').hasClass('is-invalid')) {
        $('.type_marks_oi').removeClass('is-invalid')
      }
    };

    if (allow) {
      let ol = document.createElement("ol");
      hid.appendChild(ol);
      let countLi = document.querySelector(".count_li_OI");
      for (let i = 1; i <= countLi.value; i++) {
        let li = document.createElement("li");
        ol.appendChild(li).textContent = `item${i}`;
      }
      let marks = document.querySelector(".type_marks_oi");
      ol.style.listStyleType = marks.options[marks.selectedIndex].value;
      $('#area').val($('.main_box').html() + $('.hid').html());
      $('.createList').attr('data-dismiss', 'modal');
      $('.hid').empty();
      $('.valid_val').hide();
    }
  }
  $('#myModal').on('hidden.bs.modal', function (e) {
    $('.createList').attr('data-dismiss', '')
    $('.valid_val').hide();
    $("#f4").trigger('reset');
  })

  $('.reset1').on('click', function () {
    $("#f4").trigger('reset');
    $('.valid_val').hide();
    $('.num1').removeClass('is-invalid');
    $('.type_marks_oi').removeClass('is-invalid');
  })
  //====================CREATE LIST Ul====================================================
  crListUl = function () {
    let allow = true;
    if ($('.num2').val() === "" || isNaN($('.num2').val()) === true) {
      $('.num2').addClass('is-invalid')
      $('.valid_val').show();
      allow = false;

    } else if ($('.num2').val() != "" || isNaN($('.num2').val()) == false) {
      $('.num2').removeClass('is-invalid');
    }

    if ($('.type_marks option:selected').val() == 'choose UI type mark') {
      $('.type_marks').addClass('is-invalid')
      allow = false;
    } else {
      if ($('.type_marks').hasClass('is-invalid')) {
        $('.type_marks').removeClass('is-invalid')
      }
    };
    if (allow) {
      let ul = document.createElement("ul");
      hid.appendChild(ul);
      let countLi = document.querySelector(".count_li");
      for (let i = 1; i <= countLi.value; i++) {
        let li = document.createElement("li");
        ul.appendChild(li).textContent = `item${i}`;
      }
      let marksUl = document.querySelector(".type_marks");
      ul.style.listStyle = marksUl.options[marksUl.selectedIndex].value;
      $('#area').val($('.main_box').html() + $('.hid').html());
      $('.createUl').attr('data-dismiss', 'modal');
      $('.hid').empty();
      $('.valid_val').hide();
      $("#f3").trigger('reset');
    }
  }
  $('#myModal').on('hidden.bs.modal', function (e) {
    $('.createUl').attr('data-dismiss', '')
    $('.valid_val').hide();
    $("#f3").trigger('reset');
  })
  $('.reset2').on('click', function () {
    $("#f3").trigger('reset');
    $('.valid_val').hide();
    $('.num2').removeClass('is-invalid')
  })
})