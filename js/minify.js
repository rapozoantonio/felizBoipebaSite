/*jshint browser: true, strict: true, undef: true */
/*global define: false */

function applyAnimation()
{
	"use strict";
    var e = $(this).offset().top,
        t = $(window).scrollTop(),
        a = !1;
    if (t + 590 > e)
    {
        var i = $(this);
        i.addClass(active), a && setTimeout(function()
        {
            i.removeClass(active)
        }, 1e3)
    }
}
$(function()
    {
    	"use strict";
        $('[data-toggle="tooltip"]').tooltip()
    }), $(document).ready(function()
    {
        var e = ($("#filterOptions li.active a").attr("class"), $("ul.ourHolder")),
            t = e.clone();
        $("#filterOptions li a").click(function()
        {
            $("#filterOptions li").removeClass("active");
            var a = $(this).attr("class");
            if ($(this).parent().addClass("active"), "all" == a) var i = t.find("li");
            else var i = t.find("li[data-type=" + a + "]");
            return e.quicksand(i,
            {
                duration: 800,
                easing: "easeInOutQuad"
            }), !1
        })
    }), $(function()
    {
    	"use strict";
        $(".nano").nanoScroller()
    }),
    function()
    {
    	"use strict";
        [].slice.call(document.querySelectorAll("select.cs-select")).forEach(function(e)
        {
            new SelectFx(e)
        })
    }(), jQuery(function()
    {
        jQuery("#date_timepicker_start").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    maxDate: jQuery("#date_timepicker_end").val() ? jQuery(
                        "#date_timepicker_end").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        }), jQuery("#date_timepicker_end").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    minDate: jQuery("#date_timepicker_start").val() ? jQuery(
                        "#date_timepicker_start").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        })
    }), jQuery(function()
    {
        jQuery("#date_timepicker_start2").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    maxDate: jQuery("#date_timepicker_end2").val() ? jQuery(
                        "#date_timepicker_end2").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        }), jQuery("#date_timepicker_end2").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    minDate: jQuery("#date_timepicker_start2").val() ? jQuery(
                        "#date_timepicker_start2").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        })
    }), jQuery(function()
    {
        jQuery("#date_timepicker_start3").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    maxDate: jQuery("#date_timepicker_end3").val() ? jQuery(
                        "#date_timepicker_end3").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        }), jQuery("#date_timepicker_end3").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    minDate: jQuery("#date_timepicker_start3").val() ? jQuery(
                        "#date_timepicker_start3").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        })
    }), jQuery(function()
    {
        jQuery("#date_timepicker_start4").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    maxDate: jQuery("#date_timepicker_end4").val() ? jQuery(
                        "#date_timepicker_end4").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        }), jQuery("#date_timepicker_end4").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    minDate: jQuery("#date_timepicker_start4").val() ? jQuery(
                        "#date_timepicker_start4").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        })
    }), jQuery(function()
    {
        jQuery("#date_timepicker_start5").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    maxDate: jQuery("#date_timepicker_end5").val() ? jQuery(
                        "#date_timepicker_end5").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        }), jQuery("#date_timepicker_end5").datetimepicker(
        {
            format: "Y/m/d",
            onShow: function()
            {
                this.setOptions(
                {
                    minDate: jQuery("#date_timepicker_start5").val() ? jQuery(
                        "#date_timepicker_start5").val() : !1
                })
            },
            timepicker: !1,
            scrollInput: !1
        })
    }),
    function(e)
    {
    	"use strict";
        e(".swipebox").swipebox(
        {
            useSVG: !0
        })
    }(jQuery), $(window).load(function()
    {
        $("#preloader").fadeOut("fast", function()
        {
            $(this).remove()
        })
    }), wow = new WOW(
    {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }), wow.init(), $("#home_slider").carousel(
    {
        interval: 7e3
    }), $("#menu_list").carousel(
    {
        interval: 5e4
    }), $("#sponsors").carousel(
    {
        interval: 5e4
    }), $("#testimonials").carousel(
    {
        interval: 5e4
    }), $("#about").carousel(
    {
        interval: 5e4
    }), $(".photo_carousel").carousel(
    {
        interval: 9e3
    }), $("#sh_carousel").carousel(
    {
        pause: !0,
        interval: !1
    }), $("#contact_form").submit(function(e)
    {
        e.preventDefault(), dataString = $("#contact_form").serialize(), $.ajax(
        {
            type: "POST",
            url: "mail_contact.php",
            data: dataString,
            dataType: "json",
            success: function(e)
            {
                "true" == e.valid ? ($("#contactMsgc").html('<span style="color:green;">' + e
                        .msg + "</span>"), $("#contact_form")[0].reset()) : $("#contactMsgc")
                    .html('<span style="color:red;">' + e.msg + "</span>")
            }
        })
    }), $("#reservation_form").submit(function(e)
    {
        e.preventDefault(), dataString = $("#reservation_form").serialize(), $.ajax(
        {
            type: "POST",
            url: "mail.php",
            data: dataString,
            dataType: "json",
            success: function(e)
            {
                "true" == e.valid ? ($("#contactMsg").html('<span style="color:green;">' + e.msg +
                    "</span>"), $("#reservation_form")[0].reset()) : $("#contactMsg").html(
                    '<span style="color:red;">' + e.msg + "</span>")
            }
        })
    }), $("#reservation_form2").submit(function(e)
    {
        e.preventDefault(), dataString = $("#reservation_form2").serialize(), $.ajax(
        {
            type: "POST",
            url: "mail.php",
            data: dataString,
            dataType: "json",
            success: function(e)
            {
                "true" == e.valid ? ($("#contactMsg_2").html('<span style="color:green;">' +
                    e.msg + "</span>"), $("#reservation_form2")[0].reset()) : $(
                    "#contactMsg_2").html('<span style="color:red;">' + e.msg + "</span>")
            }
        })
    }), $("#reservation_form3").submit(function(e)
    {
        e.preventDefault(), dataString = $("#reservation_form3").serialize(), $.ajax(
        {
            type: "POST",
            url: "mail.php",
            data: dataString,
            dataType: "json",
            success: function(e)
            {
                "true" == e.valid ? ($("#contactMsg_3").html('<span style="color:green;">' +
                    e.msg + "</span>"), $("#reservation_form3")[0].reset()) : $(
                    "#contactMsg_3").html('<span style="color:red;">' + e.msg + "</span>")
            }
        })
    }), $("#reservation_form4").submit(function(e)
    {
        e.preventDefault(), dataString = $("#reservation_form4").serialize(), $.ajax(
        {
            type: "POST",
            url: "mail.php",
            data: dataString,
            dataType: "json",
            success: function(e)
            {
                "true" == e.valid ? ($("#contactMsg_4").html('<span style="color:green;">' +
                    e.msg + "</span>"), $("#reservation_form4")[0].reset()) : $(
                    "#contactMsg_4").html('<span style="color:red;">' + e.msg + "</span>")
            }
        })
    }), $("#reservation_form5").submit(function(e)
    {
        e.preventDefault(), dataString = $("#reservation_form5").serialize(), $.ajax(
        {
            type: "POST",
            url: "mail.php",
            data: dataString,
            dataType: "json",
            success: function(e)
            {
                "true" == e.valid ? ($("#contactMsg_5").html('<span style="color:green;">' +
                    e.msg + "</span>"), $("#reservation_form5")[0].reset()) : $(
                    "#contactMsg_5").html('<span style="color:red;">' + e.msg + "</span>")
            }
        })
    }), $(document).ready(function()
    {
        $(".carousel-touch").swipe(
        {
            swipeLeft: function()
            {
                $(this).parent().carousel("next")
            },
            swipeRight: function()
            {
                $(this).parent().carousel("prev")
            },
            threshold: 15
        }), $(".count").counterUp(
        {
            delay: 10,
            time: 1e3
        })
    }), ! function(e)
    {
        e.fn.visible = function(t)
        {
            var a = e(this),
                i = e(window),
                r = i.scrollTop(),
                n = r + i.height(),
                o = a.offset().top,
                s = o + a.height(),
                c = t === !0 ? s : o,
                l = t === !0 ? o : s;
            return n >= l && c >= r
        }
    }(jQuery), $("body").scrollspy(
    {
        target: ".navbar",
        offset: 0
    }), $(".navbar a[href*=#]:not([href=#]),.icon-list a[href*=#]:not([href=#]), .buttons a[href*=#]:not([href=#])").click(function()
    {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname ==
            this.hostname)
        {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html,body")
                .animate(
                {
                    scrollTop: e.offset().top - 0
                }, 1e3), !1
        }
    });