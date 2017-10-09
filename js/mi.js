! function(e) {
	function t(n) {
		if(i[n]) return i[n].exports;
		var a = i[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
	}
	var i = {};
	return t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
	e.exports = i(1)
}, function(e, t, i) {
	i(2), i(3), window.marked = i(4), i(5), i(6), i(8), i(11), i(3);
	var n = i(13),
		a = i(14),
		s = i(15),
		o = i(16),
		r = i(17),
		d = i(18),
		l = i(20);
	$.productBuy = function(e) {
		var t = {
				pid: e.id,
				product: "",
				parts: [],
				install: [],
				stockData: [],
				presalesData: [],
				hdinfoData: [],
				hdinfoBookingData: [],
				hdinfoPresalesData: [],
				orderData: {},
				bigtapDataId: [],
				bigtapDataType: [],
				stockDataId: [],
				orderDataId: [],
				presalesDataId: [],
				chooseResult: {},
				selectedAddr: [],
				safety: null,
				mitvMember: null,
				allGoods: [],
				sortData: [],
				coupon: !1,
				couponData: [],
				saltTitle: "",
				address: !1,
				goodsStock: 0,
				mihomeId: "",
				selected: [],
				btnTxt: {
					bigtap: "加入购物车",
					presales: "加入购物车",
					booking: "立即预订",
					subscribe: "立即预约",
					reserve: "立即预约"
				},
				bigTagJson: {
					bigtap: {
						0: "hdinfoData",
						1: "stockData"
					},
					presales: {
						0: "hdinfoPresalesData",
						1: "presalesData"
					},
					booking: {
						0: "hdinfoBookingData",
						1: "presalesData"
					}
				}
			},
			c = {
				config: $.extend(a, e),
				selectSafety: function(e, i) {
					var n = this,
						a = e.find("li");
					a.on("click", function() {
						$(this).hasClass("active") ? ($(this).removeClass("active"), t[i] = null) : (a.removeClass("active"), $(this).addClass("active"), t[i] = {
							id: $(this).data("id"),
							name: $(this).data("name"),
							price: $(this).data("price")
						}), n.formateProList()
					})
				},
				formateProList: function() {
					if(t.parts.length || t.install.length || null !== t.safety || "" !== t.product) {
						var e = i(23);
						$("#J_proList").removeClass("hide").html(e(t))
					} else $("#J_proList").addClass("hide")
				},
				selectList: function(e, i) {
					var n = this,
						a = e.find("li"),
						s = a.find("a"),
						o = e.find(".J_listDescBox"),
						r = e.find(".J_listTips"),
						d = o.find(".J_listNum"),
						l = {},
						c = {},
						p = {},
						h = function() {
							var e = "",
								t = 0,
								i = 0;
							for(var n in l)("" !== l[n] || 0 === l[n]) && (e += l[n] + "、", t += parseFloat(c[n]), i += parseFloat(p[n]));
							e = e.substring(0, e.length - 1), o.find(".desc").html(e).end().find(".price").addClass(i === t ? "" : "del").html((i === t ? "" : "<del>" + i + "元</del>") + t + "元 ")
						},
						u = function(e, t) {
							e.find(".img").attr("src", t.data("img")).end().find(".name").html(t.data("name")).end().find(".price").find("em").html(t.data("price")), e.find(".price").find("del").html(parseFloat(t.data("price")) < parseFloat(t.data("originalprice")) ? t.data("originalprice") : "")
						},
						g = function(e) {
							1 === e ? (o.addClass("hide"), r.removeClass("hide")) : (o.removeClass("hide"), r.addClass("hide"))
						},
						f = function(e, t) {
							var i = [],
								n = $(t).data("id"),
								a = $(t).parents("li").index();
							return $.each(e, function(e, t) {
								t.id !== n && t.index !== a && i.push(t)
							}), i
						},
						m = function(e, n) {
							l[e] = n.data("name"), c[e] = n.data("price"), p[e] = n.data("originalprice"), t[i].push({
								index: n.parents("li").index(),
								item: n.index(),
								id: n.data("id"),
								is_bargain: n.data("is_bargain") || !1,
								bargain_id: n.data("bargain_id") || "",
								name: l[e],
								price: c[e]
							})
						};
					s.on("click", function() {
						if(!$(this).hasClass("active")) {
							var e = $(this).parents("li");
							$(this).addClass("active").siblings("a").removeClass("active"), u(e, $(this)), e.hasClass("active") && (t[i] = f(t[i], e.find(".active")), m(e.index(), $(this)), n.formateProList(), h())
						}
					});
					var v = a.find("i");
					v.on("click", function() {
						var e = $(this).parents("li"),
							a = e.index();
						e.hasClass("active") ? (e.removeClass("active"), l[a] = "", c[a] = 0, p[a] = 0, t[i] = f(t[i], e.find(".active")), u(e, e.find("a").eq(0)), e.siblings("li").hasClass("active") ? d.html(parseFloat(d.html()) - 1) : (d.html("0"), g(1))) : (e.addClass("active"), d.html(parseFloat(d.html()) + 1), g(), m(a, e.find(".active"))), h(), n.formateProList()
					});
					var b = e.find(".J_extend"),
						_ = e.find("ul");
					b.on("click", function() {
						_.toggleClass("hide"), b.hasClass("active") ? (b.removeClass("active").html("&#xe61b;"), 0 === parseFloat(d.html()) && (o.addClass("hide"), r.removeClass("hide"))) : (b.addClass("active").html("&#xe612;"), 0 === parseFloat(d.html()) ? (o.addClass("hide"), r.removeClass("hide")) : (o.removeClass("hide"), r.addClass("hide")))
					}), e.find(".J_listDelete").on("click", function() {
						g(1);
						for(var e = 0, s = a.length; s > e; e++) a.eq(e).removeClass("active").find("i").removeClass("active");
						t[i] = [], l = {}, d.html(0), n.formateProList()
					})
				},
				buyCountDown: function(e) {
					var t, i, n, a, s = this;
					clearInterval(s.msTimer), t = Math.floor(e % 60), i = Math.floor(e / 60 % 60), n = Math.floor(e / 3600 % 24), a = Math.floor(e / 86400) > 0 ? Math.floor(e / 86400) : "";
					var o = (a > 0 ? a + "天 " : "") + (n > 0 ? n + "小时 " : "") + (i > 0 ? i + "分钟 " : ""),
						r = 10;
					s.msTimer = setInterval(function() {
						r -= 1, $(".J_timer").find("span").html(o + (t > 0 ? t : 0) + "." + r + "秒 ")
					}, 100)
				},
				countDown: function() {
					if(!("booking" !== t.type || t.hdstarttime && t.hdendtime)) return void this.setBookingTimeup();
					var e = this;
					$.miCountdown({
						startTime: t.hdstarttime,
						endTime: t.hdendtime,
						onTime: function(i) {
							i > 3600 || (0 === $(".countdown").find(".J_timer").length && $(".countdown").html('<a href="javascript:void(0);" class="btn btn-gray-line btn-biglarge" data-type="' + t.type + '" data-name="' + $(".countdown").data("name") + '">' + $(".countdown").data("name") + '</a><div class="J_timer">距开售仅剩 <span ></span></div>'), window.now = i, e.buyCountDown(i))
						},
						onStart: function() {
							e.changeBuy()
						},
						onEnd: function() {
							e.changeBuy("end")
						}
					})
				},
				changeBuy: function(e) {
					$(".J_timer").remove(), clearInterval(this.msTimer), "end" === e ? this.setBtn() : this.setBtn(this.config.isLogin ? 1 : -1), "booking" === t.type && this.getTime()
				},
				setBookingTimeup: function() {
					$(".J_bookTime").html("预售已结束"), this.setBtn(), r({
						buyModule: c,
						_config: t
					})
				},
				getTime: function() {
					var e = this,
						i = 0,
						n = 0;
					"booking" === t.type ? (i = t.bookStarttime, n = t.bookEndtime) : ("subscribe" === t.type || "reserve" === t.type) && (i = parseInt((new Date).getTime() / 1e3), n = t.subscribe.subscribe_end_time, l({
						_config: t
					}).getCount()), $.miCountdown({
						startTime: i,
						endTime: n,
						upTime: !0,
						onStart: function(t) {
							e.countTime(t)
						},
						onEnd: function() {
							"booking" === t.type && e.setBookingTimeup(), ("subscribe" === t.type || "reserve" === t.type) && ($(".J_orderTime").html("预约已结束"), $(".J_proBuyBtn").addClass("btn-disabled").removeClass("J_proBuyBtn").html(t.subscribe.end_button_title))
						}
					})
				},
				countTime: function(e) {
					var i = Math.floor(e % 60),
						n = Math.floor(e / 60 % 60),
						a = Math.floor(e / 3600 % 24),
						s = Math.floor(e / 86400) > 0 ? Math.floor(e / 86400) : "";
					10 > a && (a = "0" + a), 10 > n && (n = "0" + n), 10 > i && (i = "0" + i), s = s > 0 ? s + " 天 " : "";
					var o = "剩 " + s + a + " 时 " + n + " 分 " + i + " 秒";
					"booking" === t.type && $(".J_bookTime").html(o), ("subscribe" === t.type || "reserve" === t.type) && $(".J_orderTime").html(o)
				},
				formatBookTime: function(e) {
					function t(e, t) {
						return(10 > e ? "0" + e : e) + t
					}
					var i = new Date(1e3 * parseInt(e)),
						n = i.getFullYear() + "年",
						a = t(i.getMonth() + 1, "月"),
						s = t(i.getDate(), "日 "),
						o = t(i.getHours(), ":"),
						r = t(i.getMinutes(), "");
					return n + a + s + o + r
				},
				hideLoadNotic: function() {
					var e = this;
					$(".J_proLoginClose").on("click", function() {
						e.config.elm.find(".J_notic").slideUp("fast", "linear"), e.config.isLoginClose = !0
					})
				},
				loopGoods: function(e, a, s, r) {
					var d = this,
						l = t.selected[e],
						c = [];
					if($.each(t.allGoods, function(t, i) {
							if(parseFloat(i.level) === e + 1) {
								var n = !1;
								$.each(a, function(e, t) {
									t.hasChild = !1, (i.name === t.value || t.name === i.name) && (n = !0, i.name === t.value && (t.isExist = !0, t.child = i.child), c.push(t))
								}), n || (a.push(i), c.push(i))
							}
						}), "" !== l.val) {
						var p = !1;
						$.each(a, function(e, t) {
							t.value === l.val && (l.index = e, p = !0)
						}), p || (0 === r ? (l.index = "", l.val = "") : (l.index = 0, l.val = a[l.index].value))
					} else 0 === r ? (l.index = "", l.val = "") : (l.index = l.index, l.val = a[l.index].value);
					$.each(c, function(i, n) {
						if(n.list) {
							var a = t.selected[e + 1].val;
							$.each(n.child, function(e, i) {
								if("" !== a) {
									if(i.value === a) return void(n.hasChild = !0)
								} else
									for(var s = t.allGoods, o = 0, r = s.length; r > o; o++)
										if(parseFloat(n.level) + 1 === parseFloat(s[o].level)) {
											i.value === s[o].name && (n.hasChild = !1);
											break
										}
							})
						} else s && s.child ? $.each(s.child, function(e, t) {
							t.value === n.value && (n.hasChild = !0)
						}) : n.hasChild = !0
					});
					var h = {
							index: e,
							num: l,
							data: c,
							formateListPro: "" === l.index ? !1 : !0,
							bigTagJson: t.bigTagJson,
							stockData: t.stockData,
							presalesData: t.presalesData,
							hdinfoData: t.hdinfoData,
							hdinfoBookingData: t.hdinfoBookingData,
							hdinfoPresalesData: t.hdinfoPresalesData
						},
						u = "";
					if(u = doT.template(c[l.index] && c[l.index].list ? $("#J_proTmp").html() : $("#J_proTmp2").html()), 0 === r ? $(".J_step").eq(e).replaceWith(u(h)).find("img").each(function() {
							n.loadImage($(this))
						}) : $("#J_list").append(u(h)).find("img").each(function() {
							n.loadImage($(this))
						}), l = l.index, a[l] && a[l].list) this.loopGoods(e + 1, a[l].list, a[l], r);
					else if(0 === r) {
						var g = $(".J_step").eq(e).find("li"),
							f = 0,
							m = 0,
							v = 0;
						$.each(g, function(e) {
							g.eq(e).hasClass("btn-hide") || (m++, f = e), (g.eq(e).hasClass("active") || g.eq(e).hasClass("active-disabled")) && (v = e)
						}), this.selectStep(1), g.eq(1 === m ? f : v).trigger("click")
					} else {
						var b = a[l].goods.services;
						b && b.insurance && (b.insurance.href = this.config.orderSite + "/product/insurance?type=", u = i(24), $("#J_list").append(u(b.insurance))), u = doT.template($("#J_proImgTmp").html()), $("#J_sliderView").html(u(a[l].goods)), 0 !== a[l].goods.images.length && o(), t.product = {
							name: a[l].goods.goods_name,
							market_price: a[l].goods.market_price,
							price: a[l].goods.goods_price,
							shipment_text: a[l].goods.shipment_text || ""
						}, t.id = a[l].goods.goods_id, t.cid = a[l].goods.commodity_id, t.type = a[l].goods.action.type, t.isbigtap = a[l].goods.action.isBigtap, d.relationCallback(), a[l].stock = d.getStockData(t.type, t.isbigtap ? 0 : 1);
						var _ = d.getStockData(t.type, 0)[t.id];
						_ && (t.hdendtime = _.endtime || 0, t.hdstarttime = _.starttime || 0), a[l].hdendtime = t.hdendtime, a[l].hdstarttime = t.hdstarttime, a[l].orderData = t.orderData, a[l].href = this.config.loginUrl, a[l].isLogin = this.config.isLogin, u = i(25), $("#J_buyBtnBox").html(u(a[l]));
						var y = $("#J_policy");
						if(y.addClass("hide"), b && b.service_refound_policy) {
							var x = b.service_refound_policy;
							x && 0 !== x.length && (y.removeClass("hide").find(".J_tips").html(x.description), x.is_support ? y.find(".nosupport").addClass("hide").end().find(".support").removeClass("hide") : y.find(".support").addClass("hide").end().find(".nosupport").removeClass("hide"))
						}
						if($(".J_proPrice").html(t.product.price + "元 " + (t.product.shipment_text ? "<em>(" + t.product.shipment_text + ")</em>" : "") + (parseFloat(t.product.market_price) > parseFloat(t.product.price) ? "<del>" + t.product.market_price + "元</del>" : "")), $(".J_proOrder").addClass("hide"), "booking" === t.type) {
							$(".J_proBook,#J_bookFlow").removeClass("hide");
							var k = a[l].goods.booking_info;
							t.bookPrice = k.price, $(".J_bookPrice").html(k.price), t.bookStarttime = k.pre_start_time, t.bookEndtime = k.pre_end_time, t.saltTitle = k.sale_title, $("#J_bookFlow").find(".item-infor").eq(0).html(d.formatBookTime(k.pre_start_time) + " - " + d.formatBookTime(k.pre_end_time)).end().eq(1).html(d.formatBookTime(k.final_start_time) + " - " + d.formatBookTime(k.final_end_time)).end().eq(2).html(t.saltTitle), n.ajax({
								url: d.config.bookRule,
								data: {
									product_id: t.id
								},
								callback: function(e) {
									e && 1 === e.code ? ($(".J_bookRuleTips").removeClass("hide"), $(".J_bookRuleCon").find("div").html(e.data.rules_detail)) : $(".J_bookRuleTips").addClass("hide")
								}
							})
						} else $(".J_proBook,#J_bookFlow").addClass("hide"), ("subscribe" === t.type || "reserve" === t.type) && ($(".J_proOrder").removeClass("hide"), $(".J_orderPrice").html(t.product.price + (t.product.shipment_text ? "<em>(" + t.product.shipment_text + ")</em>" : "") + (parseFloat(t.product.market_price) > parseFloat(t.product.price) ? "<del>￥" + t.product.market_price + "</del>" : "")), t.subscribe = "subscribe" === t.type ? a[l].goods.subscribe_info : a[l].goods.reserve_info, d.getTime(), t.orderDataId.length > 0 && n.ajax({
							url: d.config.orderDatacheck + "?goods_id_list=" + t.orderDataId.join(",") + "&appointment_batch=" + t.subscribe.batch_key + "&is_limit_some_sku=" + t.subscribe.is_limit_some_sku,
							callback: function(e) {
								if(1 === e.code && e.data && e.data.list)
									if(t.orderData = e.data.list, t.subscribe.is_limit_some_sku) {
										for(var i in t.orderData)
											if(t.orderData[i]) {
												d.setBtn(3);
												break
											}
									} else t.orderData[t.id] && d.setBtn(3)
							}
						}));
						"presales" === t.type && (t.saltTitle = a[l].goods.presales_info.sale_title)
					}
				},
				formatPro: function() {
					var e = this;
					e.config.isLogin || (e.config.list.isLogin = e.config.isLogin, e.config.list.href = e.config.loginUrl, e.config.elm.find(".J_proLogin").attr("href", e.config.loginUrl).end().find(".J_notic").removeClass("hide")), e.config.elm.find(".J_error,.J_load").addClass("hide").end().find(".J_main").removeClass("hide"), t.safety = null, t.mitvMember = null, $("#J_list").html(""), e.loopGoods(0, e.config.list.list), e.selectStep(), e.selectSafety($("#J_safety"), "safety"), e.addressInit(t.isbigtap), e.formateProList()
				},
				addressInit: function(e) {
					t.selectedAddr.length ? this.checkSelectAddr(e) : (this.chooseRegionsInit(e), t.coupon || d({
						_config: t
					}).init())
				},
				chooseRegionsInit: function(e, i) {
					var n = this;
					MI.buyChooseAddress.init({
						showTrigger: "#J_switchChooseRegions",
						afterChoose: function(a, s) {
							a && a.length && (t.selectedAddr = a, s && (t.mihomeId = s), $("#J_modalChooseRegions").modal("hide"), t.address || 0 !== t.goodsStock ? n.checkSelectAddr(e, i) : n.getGoodsStock())
						}
					})
				},
				setBtn: function(e) {
					if("subscribe" !== t.type && "reserve" !== t.type || 3 === e) {
						var i = $("#J_buyBtnBox").find(".btn");
						if(-1 === e) return void i.replaceWith('<a href="' + this.config.loginUrl + '"  class="btn btn-primary btn-biglarge ">登录后购买</a>');
						if(1 === e) return void i.replaceWith('<a href="javascript:void(0);" class="btn btn-primary  btn-biglarge J_proBuyBtn" ' + (t.btnTxt[t.type] ? ' id="J_proAddcart" ' : "") + ' data-type="' + t.type + '" data-isbigtap="' + t.isbigtap + '" data-name="' + i.data("name") + '">' + (t.btnTxt[t.type] ? t.btnTxt[t.type] : i.data("name")) + "</a>");
						if(2 === e) return void i.replaceWith('<a data-sign="disabled" data-type="' + t.type + '" data-isbigtap="' + t.isbigtap + '" data-name="' + i.data("name") + '" class="btn btn-disabled btn-biglarge" href="javascript:void(0);" >暂时无法送达</a>');
						if(3 === e) return void i.replaceWith('<a data-sign="disabled" data-type="' + t.type + '" data-name="' + i.data("name") + '" class="btn btn-disabled btn-biglarge" href="javascript:void(0);" >已预约</a>');
						i.replaceWith('<a data-sign="disabled" data-type="' + t.type + '" data-isbigtap="' + t.isbigtap + '" data-name="' + i.data("name") + '" class="btn btn-line-primary btn-biglarge J_setRemind" href="javascript:void(0);" >到货通知</a>'), this.setStepLi()
					}
				},
				setStepLi: function() {
					var e = $(".J_step").length,
						t = $(".J_step").eq(e - 1).find("li");
					t.filter(".active").addClass("active-disabled")
				},
				changeAddress: function() {
					var e = this,
						i = $("#J_productStatus");
					return {
						changRelation: function() {
							var i = $("#J_relation");
							"disabled" !== $("#J_buyBtnBox").find(".btn").data("sign") ? (e.relation && e.relation.length > 0 && "" !== i.attr("style") && i.stop().animate({
								height: "133px"
							}, 300, "linear", function() {
								i.attr("style", "")
							}), t.isbigtap && (e.getStockData(t.type, 0).length > 0 && e.getStockData(t.type, 0)[t.id].hdstatus >= 3 ? e.setBtn() : (e.countDown(), e.changeAddress().setBuy()))) : (e.relation && e.relation.length > 0 && i.stop().animate({
								height: 0
							}, 300, "linear", function() {
								i.css("overflow", "hidden")
							}), "booking" === t.type && t.isbigtap ? e.countDown() : r({
								buyModule: c,
								_config: t
							}))
						},
						setBtnRemind: function() {
							$("#J_safety") && $("#J_safety").addClass("hide"), this.changRelation()
						},
						setNoAddress: function() {
							i.addClass("nohas").removeClass("noserver over active presales booking").find(".time").html("")
						},
						setNoserver: function() {
							this.setBtnRemind(2), i.addClass("noserver").removeClass("nohas over active presales booking").find(".time").html("")
						},
						setSoldout: function() {
							("common" === t.type || "bigtap" === t.type || "presales" === t.type || "booking" === t.type) && this.setBtnRemind(), i.addClass("soldout").removeClass("nohas active noserver presales").find(".time").html("")
						},
						setBuy: function(n) {
							i.removeClass("soldout noserver active presales book").find(".time").html(n ? n.data.est_delivery_desc : ""), "presales" === t.type ? (i.addClass("presales"), i.find(".time").html(t.saltTitle)) : "booking" === t.type ? (i.addClass("booking"), i.find(".time").html(t.saltTitle)) : i.addClass("active"), t.isbigtap || e.setBtn(1), $("#J_safety") && $("#J_safety").removeClass("hide")
						},
						changgeInfor: function(i) {
							return "subscribe" === t.type || "reserve" === t.type ? void e.changeAddress().setSoldout() : void(1 === i.data.can_delivery ? i.data.is_cos ? e.changeAddress().setSoldout() : "disabled" === $("#J_buyBtnBox").find(".btn").data("sign") ? e.changeAddress().setSoldout() : (e.changeAddress().setBuy(i), e.changeAddress().changRelation()) : e.changeAddress().setNoserver(i))
						}
					}
				},
				checkSelectAddr: function() {
					var e = this;
					if("common" === t.type && "presales" === t.type && "booking" === t.type && "bigtap" === t.type) return void e.changeAddress().setNoAddress();
					var i = t.selectedAddr.length > 4 ? 1 : 0,
						a = {
							product_id: t.id,
							item_id: 0,
							province_id: t.selectedAddr[i + 0].id,
							city_id: t.selectedAddr[i + 1].id,
							district_id: t.selectedAddr[i + 2].id,
							area: t.selectedAddr[i + 3].id
						};
					("presales" === t.type || "booking" === t.type) && (a.is_presale = 1), n.ajax({
						url: MI.GLOBAL_CONFIG.orderSite + "/api/deliverySearch.php",
						data: a,
						error: function() {
							e.changeAddress().setNoserver()
						},
						callback: function(i) {
							i.isbigtap = t.isbigtap, i && 1 === i.code && 1 === i.data.can_delivery ? (i.data.mihome_id && (t.mihomeId = i.data.mihome_id), e.changeAddress().changgeInfor(i)) : e.changeAddress().setNoserver()
						}
					})
				},
				loopCheckIsBigtag: function(e, i) {
					var n = i[parseFloat(t.selected[e].index)];
					return(!n || n && !n.price_min) && (n = i[0]), n && n.list ? void this.loopCheckIsBigtag(e + 1, n.list) : (n = n.goods, n.action && ("bigtap" === n.action.type || "booking" === n.action.type && n.action.isBigtap || "presales" === n.action.type && n.action.isBigtap) ? (t.type = n.action.type, t.isbigtap = !0, t.id = n.goods_id, void this.getHdInfoStatus()) : void this.formatPro())
				},
				checkIsBigtag: function() {
					this.getGoodsStock()
				},
				setSelectIndex: function(e, i, n) {
					for(var a = 0, s = t.selected.length; s > a; a++)
						if(a === e) {
							t.selected[a] = {
								val: i,
								index: n
							};
							break
						}
				},
				unselected: function(e, i) {
					if(t.selected[e].val = i, t.selected[t.selected.length - 1].child = [], !(0 > e)) {
						var n = !1;
						$.each(t.allGoods, function(a, s) {
							s.child.length > 0 && $.each(s.child, function(a, o) {
								o.value !== i || n || (t.selected[e - 1].val = s.name, t.selected[e - 1].index = s.level, 2 > e && (t.selected[e + 1].val = s.child[0].val), n = !0)
							})
						})
					}
				},
				selectStep: function(e) {
					var t = this,
						i = $(".J_step");
					i.find("li").on("click", function() {
						var a = $(this);
						if(!a.hasClass("active") && !a.hasClass("active-disabled") || e) {
							var s = a.parents(".J_step"),
								o = s.data("index");
							if(o === i.length - 1) {
								if(a.hasClass("disabled") && parseFloat(a.data("childlen")) >= 1) return t.unselected(s.data("index"), a.data("value")), void t.checkIsBigtag();
								t.setSelectIndex(o, String(a.data("value")), a.data("index")), t.checkIsBigtag()
							} else t.setSelectIndex(o, String(a.data("value")), a.data("index")), t.loopGoods(0, t.config.list.list, "", 0);
							$(".step-list").find("img").each(function() {
								n.loadImage($(this))
							})
						}
					})
				},
				getGoodsStock: function() {
					if(t.stockDataId.length > 0) {
						var e = this,
							i = {
								url: e.config.orderapi + "/stock/listv2?gids=" + t.stockDataId.join(","),
								error: function() {
									e.checkPresalesDataId()
								},
								callback: function(i) {
									t.stockData = i.data, e.checkPresalesDataId()
								}
							};
						if(t.mihomeId) {
							var a = t.selectedAddr.length > 4 ? 1 : 0;
							i.data = {
								mihome_id: t.mihomeId,
								province_id: t.selectedAddr[a + 0].id,
								city_id: t.selectedAddr[a + 1].id,
								district_id: t.selectedAddr[a + 2].id,
								area: t.selectedAddr[a + 3].id
							}
						}
						n.ajax(i)
					} else this.checkPresalesDataId()
				},
				getStockDataName: function(e) {
					var i = {
						0: "stockData",
						1: "stockData"
					};
					return t.bigTagJson[e] && (i = t.bigTagJson[e]), i
				},
				getStockData: function(e, i) {
					return t[this.getStockDataName(e)[i]]
				},
				selectFirstStock: function(e) {
					for(var i = this, n = e || t.allGoods, a = "", s = 0, o = n.length; o > s; s++) {
						var r = n[s],
							d = !1;
						if(r.action && (r.isbigtap ? (a = i.getStockData(r.action, 0), a && a[r.id] && 2 === a[r.id].hdstatus && (d = !0)) : (a = i.getStockData(r.actio, 1), a && a[r.id] && (d = !0)), d)) {
							t.selected[parseFloat(r.level) - 1].val = r.name;
							for(var l = 0; o > l; l++) {
								var c = n[l].child;
								if(c)
									for(var p = 0; p < c.length; p++)
										if(c[p].id === r.id) {
											t.selected[parseFloat(n[l].level) - 1].val = n[l].name;
											break
										}
							}
							break
						}
						if(!r.action) {
							for(var h = !1, u = 0, g = r.child.length; g > u; u++) {
								var f = r.child[u];
								if(f.isbigtap ? (a = i.getStockData(f.action, 0), a && a[r.id] && 2 === a[r.id].hdstatus && (d = !0)) : (a = i.getStockData(f.action, 1), a && a[f.id] && (d = !0)), d) {
									t.selected[parseFloat(r.level) - 1].val = r.name, t.selected[parseFloat(f.level) - 1].val = f.value, h = !0;
									break
								}
							}
							if(h) break
						}
					}
				},
				checkPresalesDataId: function() {
					t.presalesDataId.length > 0 ? this.getPresalesInfo() : t.bigtapDataId.length > 0 ? this.loopBigtap() : this.formatPro()
				},
				getPresalesInfo: function() {
					var e = this,
						i = {};
					if(t.mihomeId) {
						var a = t.selectedAddr.length > 4 ? 1 : 0;
						i = {
							mihome_id: t.mihomeId,
							province_id: t.selectedAddr[a + 0].id,
							city_id: t.selectedAddr[a + 1].id,
							district_id: t.selectedAddr[a + 2].id,
							area: t.selectedAddr[a + 3].id
						}
					}
					i.channel = "presales", n.ajax({
						url: e.config.orderapi + "/stock/listv2?gids=" + t.presalesDataId.join(","),
						data: i,
						error: function() {
							e.checkBigtapDataId()
						},
						callback: function(i) {
							t.presalesData = i.data, e.checkBigtapDataId()
						}
					})
				},
				checkBigtapDataId: function() {
					t.bigtapDataId.length > 0 ? this.loopBigtap() : this.formatPro()
				},
				loopBigtap: function() {
					var e = this;
					$.each(t.bigtapDataType, function(t, i) {
						e.getHdInfoStatus(i)
					})
				},
				getHdInfoStatus: function(e) {
					var i = this,
						a = {
							m: 1
						};
					a.source = "bigtap", t.mihomeId && (a.storage = t.mihomeId), ("presales" === t.type && t.isbigtap || "presales" === e) && (a.source = "presales_bigtap"), ("booking" === t.type && t.isbigtap || "booking" === e) && (a.source = "booking_bigtap"), n.ajax({
						url: MI.GLOBAL_CONFIG.damiaoSite + "hdinfo/cn",
						data: a,
						jsonp: "jsonpcallback",
						jsonpCallback: "hdinfo_" + a.source,
						error: function() {
							i.formatPro()
						},
						callback: function(n) {
							"presales" === t.type && t.isbigtap || "presales" === e ? t.hdinfoPresalesData = n.status : "booking" === t.type && t.isbigtap || "booking" === e ? t.hdinfoBookingData = n.status : t.hdinfoData = n.status, i.formatPro()
						}
					})
				},
				checkProSelected: function(e) {
					for(var t = $(".J_step"), i = 0, n = t.length; n > i; i++)
						if(i > 0 && !t.eq(i).find(".active").length && !t.eq(i).find(".active-disabled").length) return void MI.alert({
							msg: "请" + t.eq(i).find(".step-title").data("name"),
							isConfirm: !1
						});
					e()
				},
				bigtapAdd: function(e) {
					var i = "presales" === t.type ? "presales_bigtap" : "bigtap";
					i = "booking" === t.type ? "booking_bigtap" : i;
					var n = {
						obj: e,
						gid: t.id,
						callback: c.succCallback,
						sourceVal: i,
						overCallback: function(e) {
							e.removeClass("btn-primary").addClass("btn-line-primary J_setRemind").html("到货通知").removeClass("J_proBuyBtn"), MI.alert({
								msg: "商品已售罄",
								isConfirm: !1
							})
						}
					};
					t.mihomeId > 0 && (n.storage = t.mihomeId), MI.bigtap.init(n)
				},
				succCallback: function(e) {
					var i = "";
					e && 1 === e.code ? (i = "booking" === t.type ? c.config.orderSite + "/buy/checkout?quick_order=1" : c.config.staticUrl + t.id + "&protype=product&pid=" + t.pid, t.pid = e.message, c.checkSafety(i, e)) : 1 !== e.code && MI.alert({
						msg: e.msg
					})
				},
				partsCallback: function(e) {
					return e && 1 === e.code ? null !== t.safety ? "&insurance=success&relation=success" : "&relation=success" : "&relation=fail"
				},
				checkParts: function(e, i) {
					if(i && t.parts.length) {
						var n = "",
							a = 0,
							s = [];
						$.each(t.parts, function(i, o) {
							return s.push(o.is_bargain ? o.bargain_id : o.id), a >= t.parts.length - 1 ? void MI.addShopCart(s.join("_"), function(t) {
								n = c.partsCallback(t), location.href = e + n
							}, $(".J_proBuyBtn")) : void(a += 1)
						})
					} else location.href = null !== t.safety ? e + "&insurance=success" : e
				},
				checkSafety: function(e, i) {
					null !== t.safety ? MI.addShopCart(t.safety.id, function(t) {
						t && 1 === t.code ? c.checkParts(e) : location.href = e + "&insurance=fail"
					}, $(".J_proBuyBtn"), {
						parent_itemId: t.pid
					}) : c.checkParts(e, i)
				},
				addCart: function() {
					var e = this;
					$("body").on("click", ".J_proBuyBtn", function() {
						var i = $(this);
						e.checkProSelected(function() {
							return "common" === t.type ? void MI.addShopCart(t.id, c.succCallback) : "presales" === t.type ? void($(i).data("isbigtap") ? e.bigtapAdd($("#J_proAddcart")) : MI.addShopCart(t.id, c.succCallback, $("#J_proAddcart"), {
								source: "presales"
							})) : "booking" === t.type ? void($(i).data("isbigtap") ? e.bigtapAdd($("#J_proAddcart")) : MI.addShopCart(t.id, c.succCallback, $("#J_proAddcart"), {
								source: "booking"
							})) : "subscribe" === t.type ? void l({
								_config: t,
								need_address: !0
							}).init() : "reserve" === t.type ? void l({
								_config: t,
								need_address: !1
							}).init() : void e.bigtapAdd($("#J_proAddcart"))
						})
					})
				},
				loopGoodsList: function(e, i) {
					var n = this;
					$.each(i, function(i, a) {
						var s = a.list || [],
							o = [];
						a.list && $.each(a.list, function(e, t) {
							o.push({
								value: t.value,
								level: t.level,
								isbigtap: t.goods && t.goods.action ? t.goods.action.isBigtap : !1,
								action: t.goods && t.goods.action ? t.goods.action.type : "",
								id: t.goods && t.goods.goods_id ? t.goods.goods_id : 0
							})
						}), t.allGoods.push({
							title: a.name,
							name: a.value,
							level: a.level,
							child: o,
							isbigtap: a.goods && a.goods.action ? a.goods.action.isBigtap : !1,
							action: a.goods && a.goods.action ? a.goods.action.type : "",
							id: a.goods && a.goods.goods_id ? a.goods.goods_id : 0,
							icon_url: a.goods && a.goods.icon_url ? a.goods.icon_url : "",
							image: a.goods && a.goods.image ? a.goods.image : ""
						}), s.length > 0 ? n.loopGoodsList(e + 1, s) : (s = a.goods || [], "bigtap" === s.action.type ? (t.bigtapDataId.push({
							id: s.goods_id,
							type: s.action.type
						}), t.bigtapDataType.push(s.action.type)) : "presales" === s.action.type || "booking" === s.action.type ? s.action.isBigtap ? (t.bigtapDataId.push({
							id: s.goods_id,
							type: s.action.type
						}), t.bigtapDataType.push(s.action.type)) : t.presalesDataId.push(s.goods_id) : ("common" === s.action.type && t.stockDataId.push(s.goods_id), ("subscribe" === s.action.type || "reserve" === s.action.type) && t.orderDataId.push(s.goods_id)))
					}), t.bigtapDataType = n.uniqueArr(t.bigtapDataType), t.selected.push({
						index: 0,
						val: ""
					})
				},
				uniqueArr: function(e) {
					for(var t = [], i = {}, n = 0; n < e.length; n++) i[e[n]] || (t.push(e[n]), i[e[n]] = 1);
					return t
				},
				unique: function(e) {
					for(var i = [e[0]], n = 1, a = e.length; a > n; n++) {
						for(var s = !1, o = 0, r = i.length; r > o; o++)
							if(e[n].name === i[o].name && e[n].level === i[o].level) {
								s = !0;
								break
							}
						s || (i.push(e[n]), t.sortData.push(e[n].name))
					}
					return i
				},
				reloadFun: function() {
					var e = this;
					$(".J_reload").on("click", function() {
						$(".J_load").removeClass("hide"), $(".J_error").addClass("hide"), e.setAjaxInt()
					})
				},
				showError: function(e) {
					$(".J_load").addClass("hide"), e = e ? e : "有点小问题，请点击按钮刷新重试", $(".J_error").removeClass("hide").find("h3").html(e)
				},
				setAjaxInt: function() {
					var e = this;
					setTimeout(function() {
						n.ajax({
							url: e.config.orderGet,
							data: {
								product_id: t.pid
							},
							jsonpCallback: "proget2callback",
							error: function() {
								e.showError()
							},
							callback: function(i) {
								if(1 === i.code) {
									e.config.list = i.data;
									var n = doT.template($("#J_addressTmp").html());
									e.config.list.isLogin = e.config.isLogin, e.config.list.href = e.config.loginUrl, e.addCart(), t.commodityIds = i.data.commodity_ids, "" !== i.data.product_desc_ext && $("#J_desc").html(i.data.product_desc_ext), "" !== i.data.name && (t.proName = i.data.name, $(".J_proName").html(t.proName)), e.loopGoodsList(0, e.config.list.list), t.allGoods = e.unique(t.allGoods), $(".J_addressWrap").html(n()).removeClass("hide"), e.addressInit()
								} else e.showError(i.msg)
							}
						})
					}, 500), n.ajax({
						url: e.config.orderSite + "/product/getExtendInfo",
						data: {
							product_id: t.pid
						},
						callback: function(t) {
							if(1 === t.code && (t = t.data, e.relation = t.relation, t.info && t.info.desc_tabs_view && t.info.desc_tabs_view.length > 0)) {
								tmp = i(26), $("#J_proInfo").append(tmp(t.info.desc_tabs_view[0])).find(".J_imgBox").each(function() {
									$(this).slider({
										auto: !0,
										pager: !0,
										infiniteLoop: !0
									})
								});
								for(var a = $(".J_markdown"), s = 0; s < a.length; s++) a.eq(s).html(window.marked(a.eq(s).data("desc")));
								var o = $(".section");
								o.visibleWatcher({
									offset: 100,
									onVisible: function(e, t) {
										o.filter(function(e) {
											return t + 1 >= e
										}).addClass("preload").find("img").each(function() {
											n.loadImage($(this))
										})
									}
								})
							}
						}
					})
				},
				relationCallback: function() {
					var e = this,
						i = "",
						n = {
							cid: t.cid,
							data: e.relation
						};
					if(e.relation) {
						if(0 === e.relation.length) return void $("#J_relation").addClass("hide");
						$("#J_relation").removeClass("hide"), i = doT.template($("#J_relationTmp").html());
						var a = 0;
						$("#J_relation").html(i(n)).find(".list").find("li").find("del").each(function() {
							a += parseFloat($(this).data("maxsave"))
						}), a > 0 && ($(".J_saleMax").removeClass("hide"), $(".J_salePrice").html(a)), e.selectList($("#J_parts"), "parts"), e.selectList($("#J_install"), "install");
						var s = t.parts;
						t.parts = [], $.each(s, function(e, t) {
							$("#J_relation").find(".list").find("li").eq(t.index).find("i").click().end().find("a").eq(t.item).click()
						})
					}
				},
				bookRuleModalFun: function() {
					$(".J_bookRule,.J_bookRuleCon").hover(function() {
						$(".J_bookRuleCon").removeClass("hide")
					}, function() {
						$(".J_bookRuleCon").addClass("hide")
					})
				},
				init: function() {
					this.hideLoadNotic(), s(), this.reloadFun(), this.setAjaxInt(), setTimeout(function() {
						MI.proNav({
							id: window.proBuy_id,
							target: "buy"
						}), $(".J_proName").html(t.proName)
					}, 500), this.bookRuleModalFun()
				}
			};
		c.init()
	}, $(document).ready(function() {
		$.productBuy({
			id: window.proBuy_id
		})
	})
}, function(e, t) {
	! function(e) {
		function t(t) {
			function i() {
				for(var t = -1, i = e(document).scrollTop(), n = 0, a = l.length; a > n && i + o.viewport.height() > l[n]; n += 1) t += 1;
				return t
			}

			function n() {
				var t = i();
				d !== t && (d = t, r.filter(function(t) {
					return d >= t && !e(this).hasClass(o.visibleClass)
				}).addClass(o.visibleClass).trigger("visible.visibleWatcher"), o.onVisible(r.eq(d), d))
			}

			function a() {
				r.each(function() {
					var t = e(this).attr("data-offset") ? Number(e(this).attr("data-offset")) : o.offset,
						i = t % 1 === 0 ? t : t * o.viewport.height();
					l.push(e(this).offset().top + i)
				}), n(), o.onLoad()
			}
			var s, o, r = e(this),
				d = -1,
				l = [];
			s = {
				viewport: e(window),
				visibleClass: "is-visible",
				offset: 300,
				onLoad: e.noop,
				onVisible: e.noop
			}, o = e.extend({}, s, t), a(), o.viewport.on({
				"scroll.visibleWatcher": n,
				"resize.visibleWatcher": a
			})
		}
		e.fn.visibleWatcher = function(e) {
			return t.call(this, e), this
		}
	}(jQuery)
}, function(e, t) {
	! function(e) {
		var t = {},
			n = {
				mode: "horizontal",
				slideSelector: "",
				infiniteLoop: !0,
				hideControlOnEnd: !1,
				speed: 500,
				easing: null,
				slideMargin: 0,
				startSlide: 0,
				randomStart: !1,
				captions: !1,
				ticker: !1,
				tickerHover: !1,
				adaptiveHeight: !1,
				adaptiveHeightSpeed: 500,
				video: !1,
				useCSS: !0,
				preloadImages: "visible",
				responsive: !0,
				slideZIndex: 50,
				wrapperClass: "ui-wrapper",
				touchEnabled: !0,
				swipeThreshold: 50,
				oneToOneTouch: !0,
				preventDefaultSwipeX: !0,
				preventDefaultSwipeY: !1,
				pager: !0,
				pagerType: "full",
				pagerShortSeparator: " / ",
				pagerSelector: null,
				buildPager: null,
				pagerCustom: null,
				controls: !0,
				nextText: "下一张",
				prevText: "上一张",
				nextSelector: null,
				prevSelector: null,
				autoControls: !1,
				startText: "开始",
				stopText: "停止",
				autoControlsCombine: !1,
				autoControlsSelector: null,
				auto: !1,
				pause: 4e3,
				autoStart: !0,
				autoDirection: "next",
				autoHover: !1,
				autoDelay: 0,
				autoSlideForOnePage: !1,
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 0,
				slideWidth: 0,
				onSliderLoad: e.noop,
				onSlideBefore: e.noop,
				onSlideAfter: e.noop,
				onSlideNext: e.noop,
				onSlidePrev: e.noop,
				onSliderResize: e.noop
			};
		e.fn.slider = function(a) {
			if(0 == this.length) return this;
			if(this.length > 1) return this.each(function() {
				e(this).slider(a)
			}), this;
			var s = {},
				o = this;
			t.el = this;
			var r = e(window).width(),
				d = e(window).height(),
				l = function() {
					s.settings = e.extend({}, n, a), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
						index: s.settings.startSlide
					}, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" == s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" != s.settings.mode && function() {
						var e = document.createElement("div"),
							t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
						for(var i in t)
							if(void 0 !== e.style[t[i]]) return s.cssPrefix = t[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
						return !1
					}(), "vertical" == s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(s.settings.slideSelector).each(function() {
						e(this).data("origStyle", e(this).attr("style"))
					}), c()
				},
				c = function() {
					o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="ui-viewport"></div></div>'), s.viewport = o.parent(), s.loader = e('<div class="ui-loading" />'), s.viewport.prepend(s.loader), o.css({
						width: "horizontal" == s.settings.mode ? 100 * s.children.length + 215 + "%" : "auto",
						position: "relative"
					}), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing");
					m();
					s.viewport.css({
						width: "100%",
						overflow: "hidden",
						position: "relative"
					}), s.viewport.parent().css({
						maxWidth: g()
					}), s.settings.pager || s.viewport.parent().css({
						margin: "0 auto 0px"
					}), s.children.css({
						"float": "horizontal" == s.settings.mode ? "left" : "none",
						listStyle: "none",
						position: "relative"
					}), s.children.css("width", f()), "horizontal" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" == s.settings.mode && (s.children.css({
						position: "absolute",
						zIndex: 0,
						display: "none"
					}), s.children.eq(s.settings.startSlide).css({
						zIndex: s.settings.slideZIndex,
						display: "block"
					})), s.controls.el = e('<div class="ui-controls" />'), s.settings.captions && C(), s.active.last = s.settings.startSlide == v() - 1, s.settings.video && o.fitVids();

					var t = s.children.eq(s.settings.startSlide);
					"all" == s.settings.preloadImages && (t = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.pager && k(), s.settings.controls && $(), s.settings.auto && s.settings.autoControls && w(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), p(t, h)
				},
				p = function(t, i) {
					var n = t.find("img, iframe").length;
					if(0 == n) return void i();
					var a = 0;
					t.find("img, iframe").each(function() {
						e(this).one("load", function() {
							++a == n && i()
						}).each(function() {
							this.complete && e(this).load()
						})
					})
				},
				h = function() {
					if(s.settings.infiniteLoop && "fade" != s.settings.mode && !s.settings.ticker) {
						var t = "vertical" == s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
							i = s.children.slice(0, t).clone().addClass("ui-clone"),
							n = s.children.slice(-t).clone().addClass("ui-clone");
						o.append(i).prepend(n)
					}
					s.loader.remove(), _(), "vertical" == s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(u()), o.redrawSlider(), s.settings.onSliderLoad(s.active.index), s.initialized = !0, s.settings.responsive && e(window).bind("resize", G), s.settings.auto && s.settings.autoStart && (v() > 1 || s.settings.autoSlideForOnePage) && j(), s.settings.ticker && P(), s.settings.pager && L(s.settings.startSlide), s.settings.controls && M(), s.settings.touchEnabled && !s.settings.ticker && F()
				},
				u = function() {
					var t = 0,
						n = e();
					if("vertical" == s.settings.mode || s.settings.adaptiveHeight)
						if(s.carousel) {
							var a = 1 == s.settings.moveSlides ? s.active.index : s.active.index * b();
							for(n = s.children.eq(a), i = 1; i <= s.settings.maxSlides - 1; i++) n = n.add(a + i >= s.children.length ? s.children.eq(i - 1) : s.children.eq(a + i))
						} else n = s.children.eq(s.active.index);
					else n = s.children;
					return "vertical" == s.settings.mode ? (n.each(function(i) {
						t += e(this).outerHeight()
					}), s.settings.slideMargin > 0 && (t += s.settings.slideMargin * (s.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function() {
						return e(this).outerHeight(!1)
					}).get()), "border-box" == s.viewport.css("box-sizing") ? t += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" == s.viewport.css("box-sizing") && (t += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), t
				},
				g = function() {
					var e = "100%";
					return s.settings.slideWidth > 0 && (e = "horizontal" == s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), e
				},
				f = function() {
					var e = s.settings.slideWidth,
						t = s.viewport.width();
					return 0 == s.settings.slideWidth || s.settings.slideWidth > t && !s.carousel || "vertical" == s.settings.mode ? e = t : s.settings.maxSlides > 1 && "horizontal" == s.settings.mode && (t > s.maxThreshold || t < s.minThreshold && (e = (t - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides)), e
				},
				m = function() {
					var e = 1;
					if("horizontal" == s.settings.mode && s.settings.slideWidth > 0)
						if(s.viewport.width() < s.minThreshold) e = s.settings.minSlides;
						else if(s.viewport.width() > s.maxThreshold) e = s.settings.maxSlides;
					else {
						var t = s.children.first().width() + s.settings.slideMargin;
						e = Math.floor((s.viewport.width() + s.settings.slideMargin) / t)
					} else "vertical" == s.settings.mode && (e = s.settings.minSlides);
					return e
				},
				v = function() {
					var e = 0;
					if(s.settings.moveSlides > 0)
						if(s.settings.infiniteLoop) e = Math.ceil(s.children.length / b());
						else
							for(var t = 0, i = 0; t < s.children.length;) ++e, t = i + m(), i += s.settings.moveSlides <= m() ? s.settings.moveSlides : m();
					else e = Math.ceil(s.children.length / m());
					return e
				},
				b = function() {
					return s.settings.moveSlides > 0 && s.settings.moveSlides <= m() ? s.settings.moveSlides : m()
				},
				_ = function() {
					if(s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop) {
						if("horizontal" == s.settings.mode) {
							var e = s.children.last(),
								t = e.position();
							y(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)
						} else if("vertical" == s.settings.mode) {
							var i = s.children.length - s.settings.minSlides,
								t = s.children.eq(i).position();
							y(-t.top, "reset", 0)
						}
					} else {
						var t = s.children.eq(s.active.index * b()).position();
						s.active.index == v() - 1 && (s.active.last = !0), void 0 != t && ("horizontal" == s.settings.mode ? y(-t.left, "reset", 0) : "vertical" == s.settings.mode && y(-t.top, "reset", 0))
					}
				},
				y = function(e, t, i, n) {
					if(s.usingCSS) {
						var a = "vertical" == s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)";
						o.css("-" + s.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == t ? (o.css(s.animProp, a), o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
							o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
						})) : "reset" == t ? o.css(s.animProp, a) : "ticker" == t && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, a), o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
							o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), y(n.resetValue, "reset", 0), E()
						}))
					} else {
						var r = {};
						r[s.animProp] = e, "slide" == t ? o.animate(r, i, s.settings.easing, function() {
							D()
						}) : "reset" == t ? o.css(s.animProp, e) : "ticker" == t && o.animate(r, speed, "linear", function() {
							y(n.resetValue, "reset", 0), E()
						})
					}
				},
				x = function() {
					for(var t = "", i = v(), n = 0; i > n; n++) {
						var a = "";
						s.settings.buildPager && e.isFunction(s.settings.buildPager) ? (a = s.settings.buildPager(n), s.pagerEl.addClass("ui-custom-pager")) : (a = n + 1, s.pagerEl.addClass("ui-default-pager")), t += '<div class="ui-pager-item"><a href="" data-slide-index="' + n + '" class="ui-pager-link">' + a + "</a></div>"
					}
					s.pagerEl.html(t)
				},
				k = function() {
					s.settings.pagerCustom ? s.pagerEl = e(s.settings.pagerCustom) : (s.pagerEl = e('<div class="ui-pager" />'), s.settings.pagerSelector ? e(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("ui-has-pager").append(s.pagerEl), x()), s.pagerEl.on("click", "a", I)
				},
				$ = function() {
					s.controls.next = e('<a class="ui-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = e('<a class="ui-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click", S), s.controls.prev.bind("click", J), s.settings.nextSelector && e(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && e(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = e('<div class="ui-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("ui-has-controls-direction").append(s.controls.directionEl))
				},
				w = function() {
					s.controls.start = e('<div class="ui-controls-auto-item"><a class="ui-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = e('<div class="ui-controls-auto-item"><a class="ui-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = e('<div class="ui-controls-auto" />'), s.controls.autoEl.on("click", ".ui-start", A), s.controls.autoEl.on("click", ".ui-stop", T), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? e(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("ui-has-controls-auto").append(s.controls.autoEl), B(s.settings.autoStart ? "stop" : "start")
				},
				C = function() {
					s.children.each(function(t) {
						var i = e(this).find("img:first").attr("title");
						void 0 != i && ("" + i).length && e(this).append('<div class="ui-caption"><span>' + i + "</span></div>")
					})
				},
				S = function(e) {
					s.settings.auto && o.stopAuto(), o.goToNextSlide(), e.preventDefault()
				},
				J = function(e) {
					s.settings.auto && o.stopAuto(), o.goToPrevSlide(), e.preventDefault()
				},
				A = function(e) {
					o.startAuto(), e.preventDefault()
				},
				T = function(e) {
					o.stopAuto(), e.preventDefault()
				},
				I = function(t) {
					var i = e(t.currentTarget);
					if(void 0 !== i.attr("data-slide-index")) {
						var n = parseInt(i.attr("data-slide-index"));
						n != s.active.index && (s.settings.auto && o.stopAuto(), o.goToSlide(n)), t.preventDefault()
					}
				},
				L = function(t) {
					var i = s.children.length;
					return "short" == s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(t + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(i, n) {
						e(n).find("a").eq(t).addClass("active")
					}))
				},
				D = function() {
					if(s.settings.infiniteLoop) {
						var e = "";
						0 == s.active.index ? e = s.children.eq(0).position() : s.active.index == v() - 1 && s.carousel ? e = s.children.eq((v() - 1) * b()).position() : s.active.index == s.children.length - 1 && (e = s.children.eq(s.children.length - 1).position()), e && ("horizontal" == s.settings.mode ? y(-e.left, "reset", 0) : "vertical" == s.settings.mode && y(-e.top, "reset", 0))
					}
					s.working = !1, s.settings.onSlideAfter(s.children.eq(s.active.index), s.oldIndex, s.active.index)
				},
				B = function(e) {
					s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[e]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.ui-" + e + ")").addClass("active"))
				},
				M = function() {
					1 == v() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 == s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index == v() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
				},
				j = function() {
					if(s.settings.autoDelay > 0) {
						setTimeout(o.startAuto, s.settings.autoDelay)
					} else o.startAuto();
					s.settings.autoHover && o.hover(function() {
						s.interval && (o.stopAuto(!0), s.autoPaused = !0)
					}, function() {
						s.autoPaused && (o.startAuto(!0), s.autoPaused = null)
					})
				},
				P = function() {
					var t = 0;
					if("next" == s.settings.autoDirection) o.append(s.children.clone().addClass("ui-clone"));
					else {
						o.prepend(s.children.clone().addClass("ui-clone"));
						var i = s.children.first().position();
						t = "horizontal" == s.settings.mode ? -i.left : -i.top
					}
					y(t, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && !s.usingCSS && s.viewport.hover(function() {
						o.stop()
					}, function() {
						var t = 0;
						s.children.each(function(i) {
							t += "horizontal" == s.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
						});
						var i = s.settings.speed / t,
							n = "horizontal" == s.settings.mode ? "left" : "top",
							a = i * (t - Math.abs(parseInt(o.css(n))));
						E(a)
					}), E()
				},
				E = function(e) {
					speed = e ? e : s.settings.speed;
					var t = {
							left: 0,
							top: 0
						},
						i = {
							left: 0,
							top: 0
						};
					"next" == s.settings.autoDirection ? t = o.find(".ui-clone").first().position() : i = s.children.first().position();
					var n = "horizontal" == s.settings.mode ? -t.left : -t.top,
						a = "horizontal" == s.settings.mode ? -i.left : -i.top,
						r = {
							resetValue: a
						};
					y(n, "ticker", speed, r)
				},
				F = function() {
					s.touch = {
						start: {
							x: 0,
							y: 0
						},
						end: {
							x: 0,
							y: 0
						}
					}, s.viewport.bind("touchstart", O)
				},
				O = function(e) {
					if(s.working) e.preventDefault();
					else {
						s.touch.originalPos = o.position();
						var t = e.originalEvent;
						s.touch.start.x = t.changedTouches[0].pageX, s.touch.start.y = t.changedTouches[0].pageY, s.viewport.bind("touchmove", q), s.viewport.bind("touchend", R)
					}
				},
				q = function(e) {
					var t = e.originalEvent,
						i = Math.abs(t.changedTouches[0].pageX - s.touch.start.x),
						n = Math.abs(t.changedTouches[0].pageY - s.touch.start.y);
					if(3 * i > n && s.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * n > i && s.settings.preventDefaultSwipeY && e.preventDefault(), "fade" != s.settings.mode && s.settings.oneToOneTouch) {
						var a = 0;
						if("horizontal" == s.settings.mode) {
							var o = t.changedTouches[0].pageX - s.touch.start.x;
							a = s.touch.originalPos.left + o
						} else {
							var o = t.changedTouches[0].pageY - s.touch.start.y;
							a = s.touch.originalPos.top + o
						}
						y(a, "reset", 0)
					}
				},
				R = function(e) {
					s.viewport.unbind("touchmove", q);
					var t = e.originalEvent,
						i = 0;
					if(s.touch.end.x = t.changedTouches[0].pageX, s.touch.end.y = t.changedTouches[0].pageY, "fade" == s.settings.mode) {
						var n = Math.abs(s.touch.start.x - s.touch.end.x);
						n >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())
					} else {
						var n = 0;
						"horizontal" == s.settings.mode ? (n = s.touch.end.x - s.touch.start.x, i = s.touch.originalPos.left) : (n = s.touch.end.y - s.touch.start.y, i = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 == s.active.index && n > 0 || s.active.last && 0 > n) ? y(i, "reset", 200) : Math.abs(n) >= s.settings.swipeThreshold ? (0 > n ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : y(i, "reset", 200)
					}
					s.viewport.unbind("touchend", R)
				},
				G = function(t) {
					if(s.initialized) {
						var i = e(window).width(),
							n = e(window).height();
						(r != i || d != n) && (r = i, d = n, o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index))
					}
				};
			return o.goToSlide = function(t, i) {
				if(!s.working && s.active.index != t) {
					if(s.working = !0, s.oldIndex = s.active.index, s.active.index = 0 > t ? v() - 1 : t >= v() ? 0 : t, s.settings.onSlideBefore(s.children.eq(s.active.index), s.oldIndex, s.active.index), "next" == i ? s.settings.onSlideNext(s.children.eq(s.active.index), s.oldIndex, s.active.index) : "prev" == i && s.settings.onSlidePrev(s.children.eq(s.active.index), s.oldIndex, s.active.index), s.active.last = s.active.index >= v() - 1, s.settings.pager && L(s.active.index), s.settings.controls && M(), "fade" == s.settings.mode) s.settings.adaptiveHeight && s.viewport.height() != u() && s.viewport.animate({
						height: u()
					}, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
						zIndex: 0
					}), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() {
						e(this).css("zIndex", s.settings.slideZIndex), D()
					});
					else {
						s.settings.adaptiveHeight && s.viewport.height() != u() && s.viewport.animate({
							height: u()
						}, s.settings.adaptiveHeightSpeed);
						var n = 0,
							a = {
								left: 0,
								top: 0
							};
						if(!s.settings.infiniteLoop && s.carousel && s.active.last)
							if("horizontal" == s.settings.mode) {
								var r = s.children.eq(s.children.length - 1);
								a = r.position(), n = s.viewport.width() - r.outerWidth()
							} else {
								var d = s.children.length - s.settings.minSlides;
								a = s.children.eq(d).position()
							}
						else if(s.carousel && s.active.last && "prev" == i) {
							var l = 1 == s.settings.moveSlides ? s.settings.maxSlides - b() : (v() - 1) * b() - (s.children.length - s.settings.maxSlides),
								r = o.children(".ui-clone").eq(l);
							a = r.position()
						} else if("next" == i && 0 == s.active.index) a = o.find("> .ui-clone").eq(s.settings.maxSlides).position(), s.active.last = !1;
						else if(t >= 0) {
							var c = t * b();
							a = s.children.eq(c).position()
						}
						if("undefined" != typeof a) {
							var p = "horizontal" == s.settings.mode ? -(a.left - n) : -a.top;
							y(p, "slide", s.settings.speed)
						}
					}
					s.settings.auto && o.startAuto()
				}
			}, o.goToNextSlide = function() {
				if(s.settings.infiniteLoop || !s.active.last) {
					var e = parseInt(s.active.index) + 1;
					o.goToSlide(e, "next")
				}
			}, o.goToPrevSlide = function() {
				if(s.settings.infiniteLoop || 0 != s.active.index) {
					var e = parseInt(s.active.index) - 1;
					o.goToSlide(e, "prev")
				}
			}, o.startAuto = function(e) {
				s.interval || (s.interval = setInterval(function() {
					"next" == s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
				}, s.settings.pause), s.settings.autoControls && 1 != e && B("stop"))
			}, o.stopAuto = function(e) {
				s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && 1 != e && B("start"))
			}, o.getCurrentSlide = function() {
				return s.active.index
			}, o.getCurrentSlideElement = function() {
				return s.children.eq(s.active.index)
			}, o.getSlideCount = function() {
				return s.children.length
			}, o.redrawSlider = function() {
				s.children.add(o.find(".ui-clone")).width(f()), s.viewport.css("height", u()), s.settings.ticker || _(), s.active.last && (s.active.index = v() - 1), s.active.index >= v() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (x(), L(s.active.index))
			}, o.destroySlider = function() {
				s.initialized && (s.initialized = !1, e(".ui-clone", this).remove(), s.children.each(function() {
					void 0 != e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
				}), void 0 != e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && s.pagerEl.remove(), e(".ui-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && e(window).unbind("resize", G))
			}, o.reloadSlider = function(e) {
				void 0 != e && (a = e), o.destroySlider(), l()
			}, l(), this
		}
	}(jQuery)
}, function(e, t, i) {
	(function(t) {
		(function() {
			function t(e) {
				this.tokens = [], this.tokens.links = {}, this.options = e || c.defaults, this.rules = p.normal, this.options.gfm && (this.rules = this.options.tables ? p.tables : p.gfm)
			}

			function i(e, t) {
				if(this.options = t || c.defaults, this.links = e, this.rules = h.normal, this.renderer = this.options.renderer || new n, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
				this.options.gfm ? this.rules = this.options.breaks ? h.breaks : h.gfm : this.options.pedantic && (this.rules = h.pedantic)
			}

			function n(e) {
				this.options = e || {}
			}

			function a(e) {
				this.tokens = [], this.token = null, this.options = e || c.defaults, this.options.renderer = this.options.renderer || new n, this.renderer = this.options.renderer, this.renderer.options = this.options
			}

			function s(e, t) {
				return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
			}

			function o(e) {
				return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(e, t) {
					return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? String.fromCharCode("x" === t.charAt(1) ? parseInt(t.substring(2), 16) : +t.substring(1)) : ""
				})
			}

			function r(e, t) {
				return e = e.source, t = t || "",
					function i(n, a) {
						return n ? (a = a.source || a, a = a.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(n, a), i) : new RegExp(e, t)
					}
			}

			function d() {}

			function l(e) {
				for(var t, i, n = 1; n < arguments.length; n++) {
					t = arguments[n];
					for(i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
				}
				return e
			}

			function c(e, i, n) {
				if(n || "function" == typeof i) {
					n || (n = i, i = null), i = l({}, c.defaults, i || {});
					var o, r, d = i.highlight,
						p = 0;
					try {
						o = t.lex(e, i)
					} catch(h) {
						return n(h)
					}
					r = o.length;
					var u = function(e) {
						if(e) return i.highlight = d, n(e);
						var t;
						try {
							t = a.parse(o, i)
						} catch(s) {
							e = s
						}
						return i.highlight = d, e ? n(e) : n(null, t)
					};
					if(!d || d.length < 3) return u();
					if(delete i.highlight, !r) return u();
					for(; p < o.length; p++) ! function(e) {
						return "code" !== e.type ? --r || u() : d(e.text, e.lang, function(t, i) {
							return t ? u(t) : null == i || i === e.text ? --r || u() : (e.text = i, e.escaped = !0, void(--r || u()))
						})
					}(o[p])
				} else try {
					return i && (i = l({}, c.defaults, i)), a.parse(t.lex(e, i), i)
				} catch(h) {
					if(h.message += "\nPlease report this to https://github.com/chjj/marked.", (i || c.defaults).silent) return "<p>An error occured:</p><pre>" + s(h.message + "", !0) + "</pre>";
					throw h
				}
			}
			var p = {
				newline: /^\n+/,
				code: /^( {4}[^\n]+\n*)+/,
				fences: d,
				hr: /^( *[-*_]){3,} *(?:\n+|$)/,
				heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
				nptable: d,
				lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
				blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
				list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
				html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
				def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
				table: d,
				paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
				text: /^[^\n]+/
			};
			p.bullet = /(?:[*+-]|\d+\.)/, p.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, p.item = r(p.item, "gm")(/bull/g, p.bullet)(), p.list = r(p.list)(/bull/g, p.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + p.def.source + ")")(), p.blockquote = r(p.blockquote)("def", p.def)(), p._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", p.html = r(p.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, p._tag)(), p.paragraph = r(p.paragraph)("hr", p.hr)("heading", p.heading)("lheading", p.lheading)("blockquote", p.blockquote)("tag", "<" + p._tag)("def", p.def)(), p.normal = l({}, p), p.gfm = l({}, p.normal, {
				fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
				paragraph: /^/,
				heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
			}), p.gfm.paragraph = r(p.paragraph)("(?!", "(?!" + p.gfm.fences.source.replace("\\1", "\\2") + "|" + p.list.source.replace("\\1", "\\3") + "|")(), p.tables = l({}, p.gfm, {
				nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
				table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
			}), t.rules = p, t.lex = function(e, i) {
				var n = new t(i);
				return n.lex(e)
			}, t.prototype.lex = function(e) {
				return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
			}, t.prototype.token = function(e, t, i) {
				for(var n, a, s, o, r, d, l, c, h, e = e.replace(/^ +$/gm, ""); e;)
					if((s = this.rules.newline.exec(e)) && (e = e.substring(s[0].length), s[0].length > 1 && this.tokens.push({
							type: "space"
						})), s = this.rules.code.exec(e)) e = e.substring(s[0].length), s = s[0].replace(/^ {4}/gm, ""), this.tokens.push({
						type: "code",
						text: this.options.pedantic ? s : s.replace(/\n+$/, "")
					});
					else if(s = this.rules.fences.exec(e)) e = e.substring(s[0].length), this.tokens.push({
					type: "code",
					lang: s[2],
					text: s[3] || ""
				});
				else if(s = this.rules.heading.exec(e)) e = e.substring(s[0].length), this.tokens.push({
					type: "heading",
					depth: s[1].length,
					text: s[2]
				});
				else if(t && (s = this.rules.nptable.exec(e))) {
					for(e = e.substring(s[0].length), d = {
							type: "table",
							header: s[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
							align: s[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
							cells: s[3].replace(/\n$/, "").split("\n")
						}, c = 0; c < d.align.length; c++) d.align[c] = /^ *-+: *$/.test(d.align[c]) ? "right" : /^ *:-+: *$/.test(d.align[c]) ? "center" : /^ *:-+ *$/.test(d.align[c]) ? "left" : null;
					for(c = 0; c < d.cells.length; c++) d.cells[c] = d.cells[c].split(/ *\| */);
					this.tokens.push(d)
				} else if(s = this.rules.lheading.exec(e)) e = e.substring(s[0].length), this.tokens.push({
					type: "heading",
					depth: "=" === s[2] ? 1 : 2,
					text: s[1]
				});
				else if(s = this.rules.hr.exec(e)) e = e.substring(s[0].length), this.tokens.push({
					type: "hr"
				});
				else if(s = this.rules.blockquote.exec(e)) e = e.substring(s[0].length), this.tokens.push({
					type: "blockquote_start"
				}), s = s[0].replace(/^ *> ?/gm, ""), this.token(s, t, !0), this.tokens.push({
					type: "blockquote_end"
				});
				else if(s = this.rules.list.exec(e)) {
					for(e = e.substring(s[0].length), o = s[2], this.tokens.push({
							type: "list_start",
							ordered: o.length > 1
						}), s = s[0].match(this.rules.item), n = !1, h = s.length, c = 0; h > c; c++) d = s[c], l = d.length, d = d.replace(/^ *([*+-]|\d+\.) +/, ""), ~d.indexOf("\n ") && (l -= d.length, d = this.options.pedantic ? d.replace(/^ {1,4}/gm, "") : d.replace(new RegExp("^ {1," + l + "}", "gm"), "")), this.options.smartLists && c !== h - 1 && (r = p.bullet.exec(s[c + 1])[0], o === r || o.length > 1 && r.length > 1 || (e = s.slice(c + 1).join("\n") + e, c = h - 1)), a = n || /\n\n(?!\s*$)/.test(d), c !== h - 1 && (n = "\n" === d.charAt(d.length - 1), a || (a = n)), this.tokens.push({
						type: a ? "loose_item_start" : "list_item_start"
					}), this.token(d, !1, i), this.tokens.push({
						type: "list_item_end"
					});
					this.tokens.push({
						type: "list_end"
					})
				} else if(s = this.rules.html.exec(e)) e = e.substring(s[0].length), this.tokens.push({
					type: this.options.sanitize ? "paragraph" : "html",
					pre: !this.options.sanitizer && ("pre" === s[1] || "script" === s[1] || "style" === s[1]),
					text: s[0]
				});
				else if(!i && t && (s = this.rules.def.exec(e))) e = e.substring(s[0].length), this.tokens.links[s[1].toLowerCase()] = {
					href: s[2],
					title: s[3]
				};
				else if(t && (s = this.rules.table.exec(e))) {
					for(e = e.substring(s[0].length), d = {
							type: "table",
							header: s[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
							align: s[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
							cells: s[3].replace(/(?: *\| *)?\n$/, "").split("\n")
						}, c = 0; c < d.align.length; c++) d.align[c] = /^ *-+: *$/.test(d.align[c]) ? "right" : /^ *:-+: *$/.test(d.align[c]) ? "center" : /^ *:-+ *$/.test(d.align[c]) ? "left" : null;
					for(c = 0; c < d.cells.length; c++) d.cells[c] = d.cells[c].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
					this.tokens.push(d)
				} else if(t && (s = this.rules.paragraph.exec(e))) e = e.substring(s[0].length), this.tokens.push({
					type: "paragraph",
					text: "\n" === s[1].charAt(s[1].length - 1) ? s[1].slice(0, -1) : s[1]
				});
				else if(s = this.rules.text.exec(e)) e = e.substring(s[0].length), this.tokens.push({
					type: "text",
					text: s[0]
				});
				else if(e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
				return this.tokens
			};
			var h = {
				escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
				autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
				url: d,
				tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
				link: /^!?\[(inside)\]\(href\)/,
				reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
				nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
				strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
				em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
				code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
				br: /^ {2,}\n(?!\s*$)/,
				del: d,
				text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
			};
			h._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, h._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, h.link = r(h.link)("inside", h._inside)("href", h._href)(), h.reflink = r(h.reflink)("inside", h._inside)(), h.normal = l({}, h), h.pedantic = l({}, h.normal, {
				strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
				em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
			}), h.gfm = l({}, h.normal, {
				escape: r(h.escape)("])", "~|])")(),
				url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
				del: /^~~(?=\S)([\s\S]*?\S)~~/,
				text: r(h.text)("]|", "~]|")("|", "|https?://|")()
			}), h.breaks = l({}, h.gfm, {
				br: r(h.br)("{2,}", "*")(),
				text: r(h.gfm.text)("{2,}", "*")()
			}), i.rules = h, i.output = function(e, t, n) {
				var a = new i(t, n);
				return a.output(e)
			}, i.prototype.output = function(e) {
				for(var t, i, n, a, o = ""; e;)
					if(a = this.rules.escape.exec(e)) e = e.substring(a[0].length), o += a[1];
					else if(a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), "@" === a[2] ? (i = this.mangle(":" === a[1].charAt(6) ? a[1].substring(7) : a[1]), n = this.mangle("mailto:") + i) : (i = s(a[1]), n = i), o += this.renderer.link(n, null, i);
				else if(this.inLink || !(a = this.rules.url.exec(e))) {
					if(a = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), e = e.substring(a[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : s(a[0]) : a[0];
					else if(a = this.rules.link.exec(e)) e = e.substring(a[0].length), this.inLink = !0, o += this.outputLink(a, {
						href: a[2],
						title: a[3]
					}), this.inLink = !1;
					else if((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
						if(e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) {
							o += a[0].charAt(0), e = a[0].substring(1) + e;
							continue
						}
						this.inLink = !0, o += this.outputLink(a, t), this.inLink = !1
					} else if(a = this.rules.strong.exec(e)) e = e.substring(a[0].length), o += this.renderer.strong(this.output(a[2] || a[1]));
					else if(a = this.rules.em.exec(e)) e = e.substring(a[0].length), o += this.renderer.em(this.output(a[2] || a[1]));
					else if(a = this.rules.code.exec(e)) e = e.substring(a[0].length), o += this.renderer.codespan(s(a[2], !0));
					else if(a = this.rules.br.exec(e)) e = e.substring(a[0].length), o += this.renderer.br();
					else if(a = this.rules.del.exec(e)) e = e.substring(a[0].length), o += this.renderer.del(this.output(a[1]));
					else if(a = this.rules.text.exec(e)) e = e.substring(a[0].length), o += this.renderer.text(s(this.smartypants(a[0])));
					else if(e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
				} else e = e.substring(a[0].length), i = s(a[1]), n = i, o += this.renderer.link(n, null, i);
				return o
			}, i.prototype.outputLink = function(e, t) {
				var i = s(t.href),
					n = t.title ? s(t.title) : null;
				return "!" !== e[0].charAt(0) ? this.renderer.link(i, n, this.output(e[1])) : this.renderer.image(i, n, s(e[1]))
			}, i.prototype.smartypants = function(e) {
				return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
			}, i.prototype.mangle = function(e) {
				if(!this.options.mangle) return e;
				for(var t, i = "", n = e.length, a = 0; n > a; a++) t = e.charCodeAt(a), Math.random() > .5 && (t = "x" + t.toString(16)), i += "&#" + t + ";";
				return i
			}, n.prototype.code = function(e, t, i) {
				if(this.options.highlight) {
					var n = this.options.highlight(e, t);
					null != n && n !== e && (i = !0, e = n)
				}
				return t ? '<pre><code class="' + this.options.langPrefix + s(t, !0) + '">' + (i ? e : s(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (i ? e : s(e, !0)) + "\n</code></pre>"
			}, n.prototype.blockquote = function(e) {
				return "<blockquote>\n" + e + "</blockquote>\n"
			}, n.prototype.html = function(e) {
				return e
			}, n.prototype.heading = function(e, t, i) {
				return "<h" + t + ' id="' + this.options.headerPrefix + i.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
			}, n.prototype.hr = function() {
				return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
			}, n.prototype.list = function(e, t) {
				var i = t ? "ol" : "ul";
				return "<" + i + ">\n" + e + "</" + i + ">\n"
			}, n.prototype.listitem = function(e) {
				return "<li>" + e + "</li>\n"
			}, n.prototype.paragraph = function(e) {
				return "<p>" + e + "</p>\n"
			}, n.prototype.table = function(e, t) {
				return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
			}, n.prototype.tablerow = function(e) {
				return "<tr>\n" + e + "</tr>\n"
			}, n.prototype.tablecell = function(e, t) {
				var i = t.header ? "th" : "td",
					n = t.align ? "<" + i + ' style="text-align:' + t.align + '">' : "<" + i + ">";
				return n + e + "</" + i + ">\n"
			}, n.prototype.strong = function(e) {
				return "<strong>" + e + "</strong>"
			}, n.prototype.em = function(e) {
				return "<em>" + e + "</em>"
			}, n.prototype.codespan = function(e) {
				return "<code>" + e + "</code>"
			}, n.prototype.br = function() {
				return this.options.xhtml ? "<br/>" : "<br>"
			}, n.prototype.del = function(e) {
				return "<del>" + e + "</del>"
			}, n.prototype.link = function(e, t, i) {
				if(this.options.sanitize) {
					try {
						var n = decodeURIComponent(o(e)).replace(/[^\w:]/g, "").toLowerCase()
					} catch(a) {
						return ""
					}
					if(0 === n.indexOf("javascript:") || 0 === n.indexOf("vbscript:") || 0 === n.indexOf("data:")) return ""
				}
				var s = '<a href="' + e + '"';
				return t && (s += ' title="' + t + '"'), s += ">" + i + "</a>"
			}, n.prototype.image = function(e, t, i) {
				var n = '<img src="' + e + '" alt="' + i + '"';
				return t && (n += ' title="' + t + '"'), n += this.options.xhtml ? "/>" : ">"
			}, n.prototype.text = function(e) {
				return e
			}, a.parse = function(e, t, i) {
				var n = new a(t, i);
				return n.parse(e)
			}, a.prototype.parse = function(e) {
				this.inline = new i(e.links, this.options, this.renderer), this.tokens = e.reverse();
				for(var t = ""; this.next();) t += this.tok();
				return t
			}, a.prototype.next = function() {
				return this.token = this.tokens.pop()
			}, a.prototype.peek = function() {
				return this.tokens[this.tokens.length - 1] || 0
			}, a.prototype.parseText = function() {
				for(var e = this.token.text;
					"text" === this.peek().type;) e += "\n" + this.next().text;
				return this.inline.output(e)
			}, a.prototype.tok = function() {
				switch(this.token.type) {
					case "space":
						return "";
					case "hr":
						return this.renderer.hr();
					case "heading":
						return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
					case "code":
						return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
					case "table":
						var e, t, i, n, a, s = "",
							o = "";
						for(i = "", e = 0; e < this.token.header.length; e++) n = {
							header: !0,
							align: this.token.align[e]
						}, i += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
							header: !0,
							align: this.token.align[e]
						});
						for(s += this.renderer.tablerow(i), e = 0; e < this.token.cells.length; e++) {
							for(t = this.token.cells[e], i = "", a = 0; a < t.length; a++) i += this.renderer.tablecell(this.inline.output(t[a]), {
								header: !1,
								align: this.token.align[a]
							});
							o += this.renderer.tablerow(i)
						}
						return this.renderer.table(s, o);
					case "blockquote_start":
						for(var o = "";
							"blockquote_end" !== this.next().type;) o += this.tok();
						return this.renderer.blockquote(o);
					case "list_start":
						for(var o = "", r = this.token.ordered;
							"list_end" !== this.next().type;) o += this.tok();
						return this.renderer.list(o, r);
					case "list_item_start":
						for(var o = "";
							"list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
						return this.renderer.listitem(o);
					case "loose_item_start":
						for(var o = "";
							"list_item_end" !== this.next().type;) o += this.tok();
						return this.renderer.listitem(o);
					case "html":
						var d = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
						return this.renderer.html(d);
					case "paragraph":
						return this.renderer.paragraph(this.inline.output(this.token.text));
					case "text":
						return this.renderer.paragraph(this.parseText())
				}
			}, d.exec = d, c.options = c.setOptions = function(e) {
				return l(c.defaults, e), c
			}, c.defaults = {
				gfm: !0,
				tables: !0,
				breaks: !1,
				pedantic: !1,
				sanitize: !1,
				sanitizer: null,
				mangle: !0,
				smartLists: !1,
				silent: !1,
				highlight: null,
				langPrefix: "lang-",
				smartypants: !1,
				headerPrefix: "",
				renderer: new n,
				xhtml: !1
			}, c.Parser = a, c.parser = a.parse, c.Renderer = n, c.Lexer = t, c.lexer = t.lex, c.InlineLexer = i, c.inlineLexer = i.output, c.parse = c, e.exports = c
		}).call(function() {
			return this || ("undefined" != typeof window ? window : t)
		}())
	}).call(t, function() {
		return this
	}())
}, function(e, t) {
	$.extend({
		miCountdown: function(e) {
			var t = {
					startTime: "",
					endTime: "",
					timer: "",
					upTime: !1,
					onTime: $.noop,
					onStart: $.noop,
					onEnd: $.noop
				},
				i = $.extend(t, e);
			if(i.startTime && i.endTime) {
				var n = $.isNumeric(i.startTime) ? i.startTime : new Date(i.startTime).getTime() / 1e3,
					a = $.isNumeric(i.endTime) ? i.endTime : new Date(i.endTime).getTime() / 1e3;
				window.diffTime = 0;
				var s = function() {
					var e = parseInt((new Date).getTime() / 1e3) + window.diffTime;

					if(window.surplusTime = n - e, i.timer && clearTimeout(i.timer), i.upTime) {
						if(e >= n && a > e) "function" == typeof i.onStart && i.onStart(a - e);
						else if(e >= a) {
							if("function" == typeof i.onEnd) return void i.onEnd(e)
						} else i.onTime(window.surplusTime);
						i.timer = setTimeout(function() {
							s()
						}, 1e3)
					} else e >= n && a > e ? "function" == typeof i.onStart && i.onStart(e) : e >= a ? "function" == typeof i.onEnd && i.onEnd(e) : (i.onTime(window.surplusTime), i.timer = setTimeout(function() {
						e += 1, s()
					}, 1e3))
				};
				return window.servertime ? void s() : void $.ajax({
					url: "//time.hd.mi.com/gettimestamp",
					dataType: "script",
					cache: !0,
					timeout: 1e4,
					error: function() {
						window.servertime = (new Date).getTime() / 1e3, s()
					},
					success: function() {
						window.servertime && "number" == typeof window.servertime ? (window.servertime = window.servertime, window.diffTime = window.servertime - parseInt((new Date).getTime() / 1e3)) : window.servertime = (new Date).getTime() / 1e3, s()
					}
				})
			}
		}
	})
}, function(e, t, i) {
	i(7), MI.namespace("buyChooseAddress"), MI.buyChooseAddress = {
		init: function(e) {
			var t = this,
				i = {
					isShowStreet: !0,
					showTrigger: "#J_switchChooseRegions",
					afterChoose: $.noop
				};
			t.options = $.extend(i, e), t.apiUrl = {
				my: MI.GLOBAL_CONFIG.orderSite + "/address/getAddressList",
				"default": MI.GLOBAL_CONFIG.orderSite + "/address/getDefaultAddress",
				search: MI.GLOBAL_CONFIG.orderSite + "/address/searchByKeywords",
				translate: MI.GLOBAL_CONFIG.orderSite + "/address/getAreaInfoByLocation",
				save: MI.GLOBAL_CONFIG.orderSite + "/address/setDefaultAddress",
				login: MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href
			}, t.$userDefault = $("#J_userDefaultAddress"), t.$input = $("#J_searchRegionsInput"), t.$inputClear = $("#J_searchRegionsInputClear"), t.$searchWrapper = $("#J_searchAddressWrapper"), t.$loading = t.$searchWrapper.find(".loading"), t.$myAddr = t.$searchWrapper.find("#J_myAddress"), t.$myAddrList = t.$myAddr.find(".list"), t.$noLogin = t.$myAddr.find("#J_noLogin"), t.$nearbyAddr = t.$searchWrapper.find("#J_nearbyAddress"), t.$nearbyAddrList = t.$nearbyAddr.find(".list"), t.$searchAddr = t.$searchWrapper.find("#J_searchAdress"), t.$searchAddrList = t.$searchAddr.find(".list"), t.$noResult = t.$searchWrapper.find("#J_noSearchResult"), t.searchVal = null, t.nearbyData = null, t.myData = null, t.$noLogin.find("a").attr("href", t.apiUrl.login), t.selectAddress = new MI.fourAddress, t.selectAddress.init({
				selectEnd: function(e) {
					t.formatChooseResult(e)
				}
			}), t.checkLogin(), t.searchEvent(), t.selectEvent(), t.switchType(), t.getDefaultAddress(), t.showChooseRegions()
		},
		showChooseRegions: function() {
			var e = this,
				t = $("#J_modalChooseRegions");
			$(e.options.showTrigger).on("click", function() {
				var i = e.$userDefault.offset();
				$(window).scrollTop() + $(window).height() < i.top + t.height() && (i.top -= t.height(), i.top += $("#J_userDefaultAddress").height()), t.css({
					top: i.top,
					left: i.left
				}).modal("show").one("hidden", function() {
					e.revert()
				}), e.getMyAddress()
			})
		},
		checkLogin: function() {
			this.isLogin = $.cookie("cUserId") ? !0 : !1
		},
		revert: function() {
			this.$input.val(""), this.searchVal = null, this.toggleShow(this.$myAddr, !0), this.toggleShow(this.$nearbyAddr, !1), this.toggleShow(this.$searchAddr, !1), this.toggleShow(this.$noResult, !1)
		},
		searchEvent: function() {
			var e, t, i = this,
				n = 200;
			i.$input.on({
				focus: function() {
					i.toggleShow(i.$myAddr, !1), i.toggleShow(i.$loading, !0), i.searchVal ? i.searchAddress() : i.nearbyData ? i.formatAddress(i.nearbyData, null, "nearby") : i.searchAddress()
				},
				blur: function() {
					t && clearTimeout(t), t = setTimeout(function() {
						i.toggleShow(i.$nearbyAddr, !1), i.toggleShow(i.$searchAddr, !1), i.toggleShow(i.$noResult, !1), i.toggleShow(i.$myAddr, !0), $(".J_switchTypeTrigger").eq(0).show()
					}, 200)
				},
				keyup: function() {
					e && clearTimeout(e), e = setTimeout(function() {
						i.searchVal = $.trim(i.$input.val().replace(/[\-_'=+|\\\/]/g, " ")), i.searchVal ? i.toggleShow(i.$inputClear, !0) : i.toggleShow(i.$inputClear, !1), i.toggleShow(i.$myAddr, !1), i.toggleShow(i.$nearbyAddr, !1), i.toggleShow(i.$searchAddr, !1), i.toggleShow(i.$noResult, !1), i.toggleShow(i.$loading, !0), i.searchAddress()
					}, n)
				}
			}), i.$inputClear.on("click", function() {
				i.searchVal = null, i.$input.val("").focus(), i.toggleShow(i.$inputClear, !1)
			})
		},
		selectEvent: function() {
			var e = this;
			e.$myAddrList.on("click", ".J_addrItem", function() {
				var t = $(this).index();
				e.myData[t].address_id = {
					id: $(this).data("id")
				}, delete e.myData[t].consignee, e.formatChooseResult(e.myData[t])
			}), $.each([e.$nearbyAddrList, e.$searchAddrList], function(t, i) {
				i.on("click", ".J_addrItem", function() {
					var t = $(this).attr("data-code"),
						i = $(this).attr("data-location");
					e.translateSearchResult({
						code: t,
						location: i
					})
				})
			})
		},
		toggleShow: function(e, t) {
			t ? e.removeClass("hide") : e.addClass("hide")
		},
		switchType: function() {
			$(".J_switchTypeTrigger").on("click", function() {
				var e = $(this).attr("data-type");
				e && $(".J_chooseRegionsBox[data-type=" + e + "]").removeClass("hide").siblings(".J_chooseRegionsBox").addClass("hide")
			})
		},
		getDefaultAddress: function() {
			var e = this,
				t = {
					url: e.apiUrl["default"],
					dataType: "jsonp",
					jsonp: "jsonpcallback",
					timeout: 3e4,
					cache: !0,
					error: function() {},
					success: function(t) {
						t && 1 === t.code && e.formatChooseResult(t.data, !0)
					}
				};
			window.ref_goods && (t.data = {}, t.data.ref_goods = window.ref_goods), $.ajax(t)
		},
		getMyAddress: function() {
			var e = this;
			return e.isLogin ? void(e.myData || $.ajax({
				url: e.apiUrl.my,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				timeout: 3e4,
				cache: !0,
				error: function() {},
				success: function(t) {
					t && 1 === t.code ? (e.myData = t.data, e.formatAddress(t.data, e.myAddressPage, "my")) : -2 === t.code && (e.toggleShow(e.$loading, !1), e.toggleShow(e.$myAddr, !0))
				}
			})) : (e.toggleShow(e.$loading, !1), void e.toggleShow(e.$myAddr, !0))
		},
		searchAddress: function() {
			var e = this,
				t = e.searchVal ? "search" : "nearby";
			$.ajax({
				url: e.apiUrl.search,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: {
					keywords: e.searchVal
				},
				timeout: 3e4,
				cache: !0,
				error: function() {},
				success: function(i) {
					if(i && 1 === i.code) {
						if(!i.data || !i.data.length) return e.toggleShow(e.$loading, !1), void("search" === t && (e.toggleShow(e.$noResult, !0), $(".J_switchTypeTrigger").eq(0).hide()));
						e.searchVal || (e.nearbyData = i.data), e.formatAddress(i.data.slice(0, 5), null, t)
					}
				}
			})
		},
		formatAddress: function(e, t, i) {
			if(e) {
				var n = this,
					a = multiline(function() {
						/*!@tpl
							        {{~it :value:index}}
							            <li class="J_addrItem" data-id="{{=value.address_id}}">
							                <div class="address-title">
							                    <span class="item">{{=value.consignee}}</span>
							                    <span class="item">{{=value.province.name}}</span>
							                </div>
							                <div class="address-desc">
							                    {{=value.city.name}}{{=value.district.name}}{{=value.area.name}}
							                </div>
							            </li>
							        {{~}}
							        */
						console.log()
					}),
					s = multiline(function() {
						/*!@tpl
							        {{~it :value:index}}
							            <li class="J_addrItem" data-code="{{=value.adcode ? value.adcode : ''}}"
							            data-location="{{=value.location}}" data-id="{{=value.address_id}}">
							                <div class="address-title">
							                    <span class="item">{{=value.name}}</span>
							                </div>
							                <div class="address-desc">
							                    {{=value.pname}}{{=value.cityname}}{{=value.adname}}
							                </div>
							                <a class="btn btn-primary">选择</a>
							            </li>
							        {{~}}
							        */
						console.log()
					}),
					o = "";
				n.toggleShow(n.$loading, !1), n.toggleShow(n.$myAddr, !1), n.toggleShow(n.$noResult, !1), i && "my" === i ? (o = doT.template(a)(e), n.$myAddrList.html(o), n.toggleShow(n.$noLogin, !1), n.toggleShow(n.$myAddr, !0)) : "nearby" === i ? (o = doT.template(s)(e), n.$nearbyAddrList.html(o), n.toggleShow(n.$nearbyAddr, !0)) : "search" === i && (o = doT.template(s)(e), n.$searchAddrList.html(o), n.toggleShow(n.$searchAddr, !0)), "function" == typeof t && $.proxy(t, n)()
			}
		},
		myAddressPage: function() {
			function e() {
				a.$myAddrList.css({
					"margin-top": h * (l - 1) * -1 + "px"
				}), n.text(l)
			}
			var t, i, n, a = this,
				s = a.$myAddrList.find(".J_addrItem"),
				o = s.length,
				r = 4,
				d = o % r > 0 ? parseInt(o / r) + 1 : o / r,
				l = 1,
				c = multiline(function() {
					/*!@tpl
						          <div class="page-controller">
						              <a href="javascript:void(0);" class="iconfont page-prev">&#xe629;</a>
						              <span class="page-num"><i class="curr">{{=it.curr}}</i> / <i class="total">{{=it.total}}</i></span>
						              <a href="javascript:void(0);" class="iconfont page-next">&#xe624;</a>
						          </div>
						        */
					console.log()
				}),
				p = "",
				h = 2 * s.outerHeight();
			1 >= d || (a.$myAddrList.parent().css({
				height: h,
				overflow: "hidden"
			}), p = doT.template(c)({
				curr: l,
				total: d
			}), a.$myAddr.append(p), n = a.$myAddr.find(".curr"), i = a.$myAddr.find(".page-next"), t = a.$myAddr.find(".page-prev"), t.on("click", function() {
				l > 1 && (l -= 1), e()
			}), i.on("click", function() {
				d > l && (l += 1), e()
			}))
		},
		translateSearchResult: function(e) {
			var t = this;
			$.ajax({
				url: t.apiUrl.translate,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: {
					adcode: e.code,
					location: e.location
				},
				timeout: 3e4,
				error: function() {},
				success: function(e) {
					e && 1 === e.code && t.formatChooseResult(e.data)
				}
			})
		},
		isjson: function(e) {
			return "object" != typeof e || "[object object]" !== Object.prototype.toString.call(e).toLowerCase() || e.length ? !1 : !0
		},
		formatChooseResult: function(e, t) {
			var i = this,
				n = "",
				a = [],
				s = "";
			$.each(e, function(e, t) {
				"mihome_id" === e ? (s = t, i.options.mihomeId = t) : "address_id" === e ? a.push({
					id: t.id
				}) : i.isjson(t) && a.push({
					id: t.id,
					name: t.name
				})
			}), t || i.saveResult(a), $.each(a, function(e, t) {
				!i.options.isShowStreet && e >= 4 || t.name && (n += '<span class="item">' + t.name + "</span>")
			}), i.$userDefault.removeClass("hide").find(".address-info").html(n), "function" == typeof i.options.afterChoose && i.options.afterChoose(a, s)
		},
		saveResult: function(e) {
			var t = this,
				i = {};
			i = e.length > 4 ? {
				address_id: {
					id: e[0].id || ""
				},
				province: {
					id: e[1].id,
					name: e[1].name
				},
				city: {
					id: e[2].id,
					name: e[2].name
				},
				district: {
					id: e[3].id,
					name: e[3].name
				},
				area: {
					id: e[4].id,
					name: e[4].name
				}
			} : {
				province: {
					id: e[0].id,
					name: e[0].name
				},
				city: {
					id: e[1].id,
					name: e[1].name
				},
				district: {
					id: e[2].id,
					name: e[2].name
				},
				area: {
					id: e[3].id,
					name: e[3].name
				}
			}, $.ajax({
				url: t.apiUrl.save,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: {
					address: i
				},
				timeout: 3e4,
				error: function() {},
				success: function() {}
			})
		}
	}
}, function(e, t) {
	MI.namespace("fourAddress"), MI.fourAddress = function() {
		this.options = {
			wrapperElm: "#J_selectAddressWrapper",
			optionsWrapper: ".J_optionsWrapper",
			selectWrapper: "#J_selectWrapper",
			maxLevel: 4,
			afterFormat: $.noop,
			selectEnd: $.noop
		}
	}, MI.fourAddress.prototype = {
		constructor: MI.fourAddress,
		init: function(e) {
			var t = this;
			"object" == typeof e && (t.options = $.extend(t.options, e)), t.$wrapper = $(t.options.wrapperElm), t.$wrapper.length && (t.addrUrl = "//s1.mi.com/open/common/js/address_all_new.js?v=7930814", t.addressData = [], t.addrTemp = multiline(function() {
				/*!@tpl
					          <div class="select-box clearfix" id="J_selectWrapper">
					              <div class="select-first select-item J_select" data-init-txt="选择省份/自治区">选择省份/自治区</div>
					              <div class="select-item J_select hide" data-init-txt="选择城市/地区"></div>
					              <div class="select-item J_select hide" data-init-txt="选择区县"></div>
					              <div class="select-last select-item J_select hide" data-init-txt="选择配送区域"></div>
					          </div>

					          <div class="options-box">
					              <ul class="options-list J_optionsWrapper clearfix">
					                  {{~it :value:index}}
					                      <li class="option J_option"
					                      data-value="{{=value.id}}"
					                      data-txt="{{=value.name}}">{{=value.name}}
					                      </li>
					                  {{~}}
					              </ul>
					              <ul class="options-list J_optionsWrapper clearfix hide"></ul>
					              <ul class="options-list J_optionsWrapper clearfix hide"></ul>
					              <ul class="options-list J_optionsWrapper clearfix hide"></ul>
					          </div>
					        */
				console.log()
			}), t.optionTemp = multiline(function() {
				/*!@tpl
					          {{~it :value:index}}
					            {{? value.region_id}}
					            <li class="J_option" data-txt="{{=value.region_name}}" data-value="{{=value.region_id}}">
					            {{=value.region_name}}</li>
					            {{?? }}
					            <li class="J_option" data-txt="{{=value.name}}" data-value="{{=value.id}}"
					            data-zipcode="{{=value.zipcode ? value.zipcode : ''}}">{{=value.name}}</li>
					            {{? }}
					          {{~}}
					        */
				console.log()
			}), t.result = {}, t.lastLevel = t.options.maxLevel - 1, t.getAllRegions())
		},
		getAllRegions: function() {
			var e = this;
			$.ajax({
				url: e.addrUrl,
				dataType: "script",
				cache: !0,
				timeout: 3e4,
				error: function() {},
				success: function() {
					"undefined" != typeof window.data && (e.addressData = window.data), e.formatRegions()
				}
			})
		},
		formatRegions: function() {
			var e = this,
				t = doT.template(e.addrTemp),
				i = t(e.addressData);
			e.$wrapper.html(i), e.$optionsWrapper = e.$wrapper.find(e.options.optionsWrapper), e.$selectWrapper = e.$wrapper.find(e.options.selectWrapper), e.selectEvent(), "function" == typeof e.options.afterFormat && e.options.afterFormat()
		},
		selectEvent: function() {
			var e = this,
				t = 0;
			e.$selectWrapper.on("click.seladdr", ".J_select", function() {
				var i = $(this).addClass("active"),
					n = $(this).attr("data-init-txt");
				i && (t = $(this).index(), e.$selectWrapper.find(".J_select:gt(" + t + ")").addClass("hide").removeClass("active"), e.$optionsWrapper.addClass("hide").eq(t).removeClass("hide"), $(this).html(n).removeClass("active"))
			}), e.$optionsWrapper.on("click.seladdr", ".J_option", function() {
				var i = parseInt($(this).attr("data-value")),
					n = $(this).attr("data-txt"),
					a = $(this).attr("data-zipcode") || "",
					s = t + 1,
					o = e.$selectWrapper.find(".J_select").eq(s);
				return e.result[t] = {
					id: i,
					name: n,
					zcode: a
				}, e.$selectWrapper.find(".J_select").eq(t).html(n).addClass("active"), t === e.lastLevel ? void("function" == typeof e.options.selectEnd && e.options.selectEnd(e.result)) : (t += 1, s >= e.lastLevel ? e.getLastLevelData() : e.formatNextLevelOption(i, s), void(o.length && o.html(o.attr("data-init-txt")).removeClass("hide")))
			})
		},
		getAddressLevelData: function(e) {
			var t = [],
				i = this;
			return $.each(i.addressData, function(i, n) {
				return n.id === e ? (t = n.child, !1) : void(n.child && $.each(n.child, function(i, n) {
					return n.id === e ? (t = n.child, !1) : void(n.child && $.each(n.child, function(i, n) {
						return n.id === e ? (t = n.tags, !1) : void 0
					}))
				}))
			}), t
		},
		formatNextLevelOption: function(e, t) {
			if(e) {
				var i = this,
					n = i.getAddressLevelData(e, t),
					a = i.formatOption(n);
				i.$optionsWrapper.addClass("hide").eq(t).html(a).removeClass("hide"), 1 === n.length && setTimeout(function() {
					i.$optionsWrapper.eq(t).find(".J_option").eq(0).trigger("click")
				}, 50)
			}
		},
		getLastLevelData: function() {
			var e = this,
				t = MI.GLOBAL_CONFIG.orderSite + "/api/getAddressRegion.php";
			e.$optionsWrapper.addClass("hide").eq(e.lastLevel).html('<div class="loading"><div class="loader"></div></div>').removeClass("hide"), $.ajax({
				url: t,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: {
					parent: e.result[2].id
				},
				tiemout: 3e4,
				error: function() {},
				success: function(t) {
					if(t && t.data.regions) {
						var i = [];
						$.each(t.data.regions, function(e, t) {
							i.push(t)
						});
						var n = e.formatOption(i);
						e.$optionsWrapper.eq(e.lastLevel).html(n)
					}
				}
			})
		},
		formatOption: function(e) {
			var t = this,
				i = "";
			return e ? i = doT.template(t.optionTemp)(e) : void 0
		},
		getResult: function() {
			return this.result
		}
	}
}, function(e, t, i) {
	MI.proNav = function(e) {
		if(0 !== $("#J_proHeader").length) {
			var t = i(9),
				n = $("#J_proHeader").find("h2").text();
			$("#J_proHeader").html(t(n)), window.tarList = [];
			var a = window.tarList,
				s = function() {
					var e = $(window).scrollTop();
					for(var t in a)
						if(a.hasOwnProperty(t)) {
							var i = a[t],
								n = i.top;
							e > n ? i.callback(i, e) : i.reverse && i.reverse(i, e)
						}
				};
			$(window).on("scroll", function() {
				s()
			}), 0 === $(".J_miOneScroller").length && $("html,body").animate({
				scrollTop: 1 === $("#J_proHeader").length ? $("#J_proHeader").offset().top : 140
			}, 1e3), e = e || {};
			var o = {
					id: e.id ? e.id : "",
					target: e.target ? e.target : ""
				},
				r = function() {
					var e = 140;
					1 === $("#J_proHeader").length && (e = $("#J_proHeader").offset().top + $("#J_proHeader").height());
					var t = e;
					a.push({
						top: t,
						callback: function() {
							$("#J_fixNarBar").addClass("nav_fix")
						},
						reverse: function() {
							$("#J_fixNarBar").removeClass("nav_fix")
						}
					})
				},
				d = {};
			o.id ? d.product_id = o.id : d.url = "http://" + window.location.host + window.location.pathname, $.ajax({
				type: "GET",
				url: MI.GLOBAL_CONFIG.orderSite + "/product/gettabinfo",
				data: d,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				timeout: 1e4,
				success: function(e) {
					if(1 === e.code && (e = e.data, e.link)) {
						e.link.id = o.id || e.link.product_id, e.link.target = o.target, e.link.domain = MI.GLOBAL_CONFIG.itemSite, e.link.url = "//" + window.location.host + window.location.pathname;
						var t = i(10);
						$(".J_navSwitch").find(".con").html(t(e.link)), $(".J_buyBtn").attr("href", MI.GLOBAL_CONFIG.itemSite + "/product/" + e.link.id + ".html"), r()
					}
				}
			})
		}
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="xm-product-box"> <div class="nav-bar" id="J_headNav"> <div class="container J_navSwitch"> <h2 class="J_proName">' + e + '</h2> <div class="con"></div> </div> </div></div><div class="xm-product-box nav-bar-hidden" id="J_fixNarBar"> <div class="nav-bar" > <div class="container J_navSwitch"> <h2 class="J_proName">' + e + '</h2> <div class="con"></div> </div> </div></div>';
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "";
		if(e.left && e.left.length > 0) {
			t += '<div class="left"> ';
			var i = e.left;
			if(i)
				for(var n, a = -1, s = i.length - 1; s > a;) {
					n = i[a += 1], t += " ";
					var o = n.url.replace(/^http:\/\/|^https:\/\//g, "//");
					t += ' <span class="separator">|</span> ', o === e.url ? t += ' <a  href="javascript:void(0);" class="cur" >' + n.title + "</a> " : (t += ' <a  href="' + o + '" ', n.is_new_page && (t += 'target="_blank"'), t += ">" + n.title + "</a> "), t += " "
				}
			t += "</div>"
		}
		if(t += '<div class="right">', e.right && e.right.length > 0) {
			t += " ";
			var r = e.right;
			if(r)
				for(var n, a = -1, d = r.length - 1; d > a;) {
					n = r[a += 1], t += " ";
					var o = n.url.replace(/^http:\/\/|^https:\/\//g, "//");
					t += " ", o === e.url ? t += ' <a  href="javascript:void(0);" class="cur" >' + n.title + "</a> " : (t += ' <a  href="' + o + '" ', n.is_new_page && (t += 'target="_blank"'), t += ">" + n.title + "</a> "), t += ' <span class="separator">|</span> '
				}
		}
		return e.id && (t += " ", "buy" === e.target && (t += ' <a href="' + e.domain + "/comment/" + e.id + '.html">用户评价</a> '), t += " ", "comment" === e.target && (t += ' <a href="javascript:void(0);" class="cur">用户评价</a> <a href="' + e.domain + "/product/" + e.id + '.html" class="btn btn-small btn-primary" >立即购买</a> '), t += " ", "buy" !== e.target && "comment" !== e.target && (t += ' <a href="' + e.domain + "/comment/" + e.id + '.html" >用户评价</a> <a href="' + e.domain + "/product/" + e.id + '.html" class="btn btn-small btn-primary" >立即购买</a> ')), t += "</div>"
	}
}, function(e, t, i) {
	MI.alert = function(e) {
		var t, n, a = {
				msg: "温馨提示",
				isConfirm: !1,
				onCancel: $.noop,
				onConfirm: $.noop
			},
			s = $.extend(a, e),
			o = i(12),
			r = $("#J_miAlert");
		s.msg && (r.length || ($("body").append(o), r = $("#J_miAlert")), t = r.find("#J_miAlertCancel"), n = r.find("#J_miAlertConfirm"), s.isConfirm ? ("function" == typeof s.onCancel && t.on("click", s.onCancel), "function" == typeof s.onConfirm && n.on("click", s.onConfirm)) : t.remove(), r.find("#J_miAlertMsg").html(s.msg), r.modal("show"))
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="modal fade modal-hide  modal-alert" id="J_miAlert" > <a class="close" data-dismiss="modal"  href="javascript: void(0);"><i class="iconfont">&#xe602;</i></a> <div class="modal-bd"> <div class="text"> <h3 id="J_miAlertMsg"></h3> </div> <div class="actions"> <button class="btn btn-gray" data-dismiss="modal" id="J_miAlertCancel">取消</button> <button class="btn btn-primary"  data-dismiss="modal" id="J_miAlertConfirm">确定</button> </div> </div></div>';
		return t
	}
}, function(e, t) {
	var i = {
		proxy: 0,
		ajax: function(e) {
			var t = {
				type: "GET",
				url: e.url,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: e.data || "",
				timeout: 1e4,
				error: function(t) {
					var i = e.error;
					i && i(t)
				},
				success: function(t) {
					var i = e.callback;
					i && i(t)
				}
			};
			e.jsonpCallback && (t.jsonpCallback = e.jsonpCallback), $.ajax(t)
		},
		setProxy: function(e, t) {
			var n = $('<iframe width="0" height="0" name="ihuodong"></iframe>');
			n.attr("src", t), $("body").append(n), $('iframe[name="ihuodong"]').load(function() {
				"function" == typeof e && e(), $('iframe[name="ihuodong"]').remove(), i.proxy = 1
			})
		},
		loadImage: function(e) {
			var t = new Image;
			return t.src = e.data("src"), t.complete ? void e.attr("src", t.src).addClass("done") : void(t.onload = function() {
				e.attr("src", t.src).addClass("done")
			})
		}
	};
	e.exports = i
}, function(e, t) {
	var i = {
		isLogin: $.cookie("cUserId") ? !0 : !1,
		elm: $("#J_buyBox"),
		hdUrl: "//a.huodong.mi.com",
		hdloginUrl: "//i.huodong.mi.com/site/login?redirectUrl=" + location.href,
		staticUrl: MI.GLOBAL_CONFIG.staticSite + "/buySuccess/?gid=",
		orderapi: window.orderapi_host,
		orderSite: MI.GLOBAL_CONFIG.orderSite || "//order.mi.com",
		loginUrl: (MI.GLOBAL_CONFIG.orderSite || "//order.mi.com") + "/site/login?redirectUrl=" + location.href,
		orderGet: (MI.GLOBAL_CONFIG.orderSite || "//order.mi.com") + "/product/get",
		addAddressUrl: (MI.GLOBAL_CONFIG.orderSite || "//order.mi.com") + "/user/address?redirectUrl=" + location.href + "&autoShow=1",
		addressListUrl: (MI.GLOBAL_CONFIG.orderSite || "//order.mi.com") + "/address/getAddressList",
		orderSubmitUrl: (MI.GLOBAL_CONFIG.orderSite || "//order.mi.com") + "/buyservice/appointmentCreate",
		bookRule: (MI.GLOBAL_CONFIG.orderSite || "//order.mi.com") + "/product/bookingRules",
		orderCount: (MI.GLOBAL_CONFIG.orderSite || "//order.mi.com") + "/buyservice/appointmentCount",
		orderDatacheck: (MI.GLOBAL_CONFIG.orderSite || "//order.mi.com") + "/buyservice/appointmentCheck"
	};
	e.exports = i
}, function(e, t) {
	var i = function() {
		var e = "fix",
			t = $(window).scrollTop(),
			i = $("#J_img"),
			n = $("#J_proHeader").offset().top || 140,
			a = i.offset().top,
			s = function() {
				var s = 0;
				$(".login-notic").hasClass("hide") || (s = 48), t >= a - 64 && t >= n + s ? (i.addClass(e).css({
					left: $(".pro-choose-main").offset().left
				}), t >= $("#J_proInfo").offset().top - 640 - s ? (i.removeClass(e), i.css({
					marginTop: $(".pro-info").height() - 560 - s + "px"
				})) : i.css({
					marginTop: 0
				})) : i.removeClass(e)
			};
		$(window).on("scroll.fix", function() {
			t = $(this).scrollTop(), s()
		}), s(), $(window).on("resize.fix", function() {
			s()
		})
	};
	e.exports = i
}, function(e, t, i) {
	i(3);
	var n = "",
		a = function() {
			function e(e, t) {
				var i = $(e),
					n = i.find(".slider").eq(t);
				n.hasClass("done") || n.attr("src", n.data("src")).addClass("done")
			}
			n && n.destroySlider();
			var t = $("#J_sliderView");
			$(".J_imgload").addClass("hide"), $("#J_img").removeClass("hide"), n = t.slider({
				infiniteLoop: !0,
				hideControlOnEnd: !0,
				mode: "fade",
				auto: !0,
				autoHover: !0,
				onSliderLoad: function(i) {
					e(t, i), $("#J_img").find(".slider").length <= 1 && $("#J_img").find(".ui-controls").hide()
				},
				onSlideBefore: function(i, n, a) {
					e(t, a)
				},
				startSlide: 0
			})
		};
	e.exports = a
}, function(e, t, i) {
	var n = i(14),
		a = i(13),
		s = function(e) {
			var t = $.extend(n, e),
				i = t.buyModule,
				s = t._config,
				o = $(".J_setRemind"),
				r = o.data("type"),
				d = o.data("name"),
				l = o.data("tip");
			l = l ? l : "已设置到货通知";
			var c = function() {
					$(".J_setRemind").replaceWith('<a class="btn btn-disabled btn-gray-line btn-biglarge J_setRemindBtn"  data-type="' + r + '" data-sign="disabled" href="javascript:void(0);"data-name="' + d + '">' + l + '</a><span class="J_cancleRemind">取消到货通知</span>')
				},
				p = function() {
					$(".J_setRemindBtn").next().remove().end(), i.setBtn()
				};
			$("body").on("click", ".J_setRemind", function() {
				i.checkProSelected(function() {
					a.ajax({
						url: t.orderSite + "/misc/onsaleRegister",
						data: {
							goods_id: s.id
						},
						callback: function(e) {
							1 === e.code ? (c(), $("#J_setRemindModal").modal("show")) : -2 === e.code && (window.location.href = t.loginUrl)
						}
					})
				})
			}), $("body").on("click", ".J_cancleRemind", function() {
				i.checkProSelected(function() {
					a.ajax({
						url: t.orderSite + "/misc/onsaleCleanup",
						data: {
							goods_id: s.id
						},
						callback: function(e) {
							1 === e.code ? p() : -2 === e.code && (window.location.href = t.loginUrl)
						}
					})
				})
			}), a.ajax({
				url: t.orderSite + "/misc/onsaleCheck",
				data: {
					goods_list: s.id
				},
				callback: function(e) {
					1 === e.code && 0 !== e.data.length && "" !== e.data[s.id] && c()
				}
			})
		};
	e.exports = s
}, function(e, t, i) {
	var n = i(14),
		a = i(13),
		s = function(e) {
			var t = e._config;
			return {
				config: $.extend(n, e),
				getCoupon: function() {
					var e = this,
						i = function(e) {
							$("#J_couponModal").find(".list").addClass("hide").end().find(".result").removeClass("hide").find(".con").addClass("hide").end().find(e).removeClass("hide")
						};
					$("body").on("click", ".J_getCoupon", function() {
						if(!e.config.isLogin) return void(window.location.href = e.config.hdloginUrl);
						var t = $(this).data("actcode"),
							n = $(this).data("drawcode");
						a.ajax({
							url: e.config.hdUrl + "/activity/draw/draw/antiuid/123",
							data: {
								code: t,
								channel: "pc",
								activitytype: "draw",
								drawcode: n
							},
							callback: function(e) {
								var t = e.code;
								return 0 === t ? void i(".succ") : 20006 === t || 20007 === t || 20013 === t || 20014 === t ? void i(".over") : void i(".fail")
							}
						})
					}), $("body").on("click", ".J_getCouponList", function() {
						return e.config.isLogin ? void(t.coupon ? e.getCouponList() : ($("#J_couponModal").modal("show"), t.coupon = !0)) : void(window.location.href = e.config.hdloginUrl)
					}), $("body").on("click", ".J_getCouponReturn", function() {
						e.getCouponList()
					})
				},
				getCouponList: function() {
					var e = this,
						n = $("#J_couponModal"),
						s = $(".J_couponWrap"),
						o = i(19);
					a.ajax({
						url: e.config.orderSite + "/product/coupon?commodity_ids=" + t.commodityIds.join(","),
						jsonpcallback: "jsonp1",
						callback: function(e) {
							if(1 === e.code) {
								if(t.couponData = e.data.can_apply_coupons, t.couponData && 0 !== t.couponData.length) {
									var i = 0,
										r = "",
										d = "";
									for(var l in t.couponData) 0 === i && (r = t.couponData[l].name), t.couponData[l].id = l, d += o(t.couponData[l]), i++;
									i > 1 && (r = r + "等" + i + "种优惠券"), s.removeClass("hide").find(".J_couponName").html(r), n.find(".list").removeClass("hide").end().find(".result").addClass("hide").end().find("ul").html(d).end().find(".no-coupon").remove(), t.coupon && n.modal("show")
								} else s.addClass("hide"), n.find(".list").removeClass("hide").append('<p class="no-coupon">优惠券已经被领光了</p>').end().find(".result").addClass("hide").end().find("ul").html("");
								e.data.sync_login && 0 === a.proxy && a.setProxy(function() {}, e.data.sync_login)
							}
						}
					})
				},
				init: function() {
					this.getCouponList(), this.getCoupon()
				}
			}
		};
	e.exports = s
}, function(e, t) {
	e.exports = function(e) {
		function t(e, t) {
			return(10 > e ? "0" + e : e) + t
		}

		function i(e) {
			var i = new Date(1e3 * parseInt(e));
			return Y = i.getFullYear() + "-", month = i.getMonth(), M = t(i.getMonth() + 1, "-"), D = t(i.getDate(), "  "), h = t(i.getHours(), ":"), m = t(i.getMinutes(), ":"), s = t(i.getSeconds(), ""), Y + M + D + h + m + s
		}
		var n = '<li> <div class="coupon-price"> <sup>￥</sup>' + e.money + ' </div> <div class="coupon-con"> <p class="coupon-txt">使用范围：' + e.range_desc + "</p> ";
		return n += ' <p class="coupon-time">' + i(e.event_start_time) + " 到 " + i(e.event_end_time) + ' 领取</p> <a href="javascript:void(0);" class="J_getCoupon" data-actcode="' + e.event_act_code + '" data-drawcode="' + e.event_draw_code + '">立即领取</a> </div></li>'
	}
}, function(e, t, i) {
	var n = i(14),
		a = i(13),
		s = function(e) {
			var t = e._config;
			return {
				item: 4,
				curCount: 1,
				totlePage: 1,
				config: $.extend(n, e),
				setOrder: function() {
					var e = this,
						n = $("#J_orderModal"),
						s = {
							goods_id: t.id,
							appointment_batch: t.subscribe.batch_key,
							activity_code: t.subscribe.activity_code
						};
					e.config.need_address && (s.address_id = t.orderAddressId), a.ajax({
						url: e.config.orderSubmitUrl,
						data: s,
						callback: function(a) {
							return -1 === a.code ? void(window.location.href = e.config.loginUrl) : void(1 === a.code ? (n.modal("hide"), 1 === a.data.status && ($("#J_orderModalSucc").modal("show"), a.data.prize && setTimeout(function() {
								$("#J_orderModalSucc").modal("hide");
								var e = i(21);
								$("#J_orderPrize").modal("show").find(".modal-body").html(e(a.data.prize))
							})), 2 === a.data.status && MI.alert({
								msg: "已预约",
								isConfirm: !1
							}), $(".J_proBuyBtn").addClass("btn-disabled").html("已预约").removeClass("J_proBuyBtn"), t.orderData[t.id] = !0) : n.find(".J_msg").html(a.msg))
						}
					})
				},
				orderAddress: function() {
					var e = this,
						i = $("#J_orderModal");
					$("body").on("click", "#J_orderModal li", function() {
						t.orderAddressId = $(this).data("id"), $(this).addClass("active").siblings().removeClass("active"), i.find(".J_msg").html("")
					}), $("body").on("click", ".J_orderSent", function() {
						return t.orderAddressId ? void e.setOrder() : void i.find(".J_msg").html("请选择一个预约地址")
					}), $("body").on("click", ".J_next", function() {
						return e.curCount++, e.curCount > e.totlePage ? void(e.curCount = e.totlePage) : void e.formatAddress()
					}), $("body").on("click", ".J_prev", function() {
						return e.curCount--, e.curCount <= 0 ? void(e.curCount = 1) : void e.formatAddress()
					})
				},
				formatAddress: function() {
					var e = {
						href: this.config.addAddressUrl,
						item: this.item,
						curCount: this.curCount,
						totlePage: this.totlePage,
						data: this.data
					};
					$("#J_orderModal").modal("show").find(".modal-body").html(this.tmp(e))
				},
				getAddresslist: function() {
					var e = this;
					a.ajax({
						url: e.config.addressListUrl,
						callback: function(t) {
							if(1 === t.code) e.data = t.data, console.log(e.data.length, e.item), e.totlePage = Math.ceil(e.data.length / e.item), e.formatAddress();
							else {
								if(-2 === t.code) return void(location.href = e.config.loginUrl);
								MI.alert({
									msg: t.msg,
									isConfirm: !1
								})
							}
						}
					})
				},
				getCount: function() {
					a.ajax({
						url: this.config.orderCount,
						data: {
							goods_id_list: t.id,
							appointment_batch: t.subscribe.batch_key
						},
						callback: function(e) {
							1 === e.code && e.data.count > t.subscribe.display_threshold && $(".J_orderCount").removeClass("hide").html(e.data.count + "人 已预约")
						}
					})
				},
				init: function() {
					this.config.need_address ? (this.orderAddress(), this.tmp = i(22), this.getAddresslist()) : this.setOrder()
				}
			}
		};
	e.exports = s
}, function(e, t) {
	e.exports = function(e) {
		var t = "";
		return e.prize_img ? (t += '<div class="prize-bg"> <a class="close" data-dismiss="modal"></a> <h3>恭喜你！获得' + e.prize_name + '</h3> <img src="' + e.prize_img + '" alt=""> <p>' + e.prize_info + "</p> ", 1 == e.prize_type && (t += ' <a href="' + MI.GLOBAL_CONFIG.orderSite + '/user/coupon/">查看我的奖励 &gt; </a> '), t += " ", 11 == e.prize_type && (t += ' <a href="' + MI.GLOBAL_CONFIG.orderSite + '/invite/list/">查看我的奖励 &gt; </a> '), t += " ", 18 == e.prize_type && (t += ' <a href="//redpack.pay.xiaomi.com/redPackage/wap/new/hongbao">查看我的奖励 &gt; </a> '), t += "</div>") : (t += '<div class="prize-mitu"> <a class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></a> <img src="//i1.mifile.cn/f/i/17/static/mitu.png" alt=""> <h3>恭喜你！获得' + e.prize_name + "</h3> <p>" + e.prize_info + "</p> ", 1 == e.prize_type && (t += ' <a href="' + MI.GLOBAL_CONFIG.orderSite + '/user/coupon/">查看我的奖励 &gt; </a> '), t += " ", 11 == e.prize_type && (t += ' <a href="' + MI.GLOBAL_CONFIG.orderSite + '/invite/list/">查看我的奖励 &gt; </a> '), t += " ", 18 == e.prize_type && (t += ' <a href="//redpack.pay.xiaomi.com/redPackage/wap/new/hongbao">查看我的奖励 &gt; </a> '), t += "</div>"), t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="modal-title"> 选择预约信息 ';
		if(e.data.length > 0 && (t += ' <a href="' + e.href + '">+ 添加新地址</a> '), t += "</div>", 0 === e.data.length) t += ' <img src="http://i1.mifile.cn/f/i/17/static/no_address.jpg"> <a href="' + e.href + '" class="btn btn-primary btn-biglarge">添加新地址</a>';
		else {
			var i = e.data.slice((e.curCount - 1) * e.item, e.data.length > e.item ? e.curCount * e.item : e.data.length);
			t += '<ul class="clearfix"> ';
			var n = i;
			if(n)
				for(var a, s = -1, o = n.length - 1; o > s;) a = n[s += 1], t += ' <li data-id="' + a.address_id + '"> <div class="address-title"> <span class="item">' + a.consignee + '</span> <span class="item">' + a.city.name + '</span> </div> <div class="address-desc">' + a.city.name + a.district.name + a.area.name + " </div> </li> ";
			t += "</ul>", e.data.length > e.item && (t += '<div class="xm-controls xm-controls-small" ' + e.data.length + '> <a class="control control-prev iconfont J_prev" href="javascript: void(0);">&#xe628;</a> <span>' + e.curCount + "</span> / " + e.totlePage + ' <a class="control control-next iconfont J_next" href="javascript: void(0);">&#xe623;</a></div>'), t += '<a href="javascript:void(0);" class="btn btn-primary btn-biglarge J_orderSent">确定</a><p class="error J_msg"></p>'
		}
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "<ul > ",
			i = 0;
		if(t += " ", "" !== e.product && (t += " <li>" + e.product.name + " ", 0 !== parseFloat(e.product.price) && (t += " ", parseFloat(e.product.market_price) > parseFloat(e.product.price) && (t += " <del>" + e.product.market_price + "元</del> "), t += " <span>" + e.product.price + "元</span> "), t += " </li> ", "booking" === e.type ? (t += " ", i += parseFloat(e.bookPrice), t += " ") : (t += " ", i += parseFloat(e.product.price), t += " "), t += " "), t += " ", null !== e.safety && (t += " <li>" + e.safety.name + " ", 0 !== parseFloat(e.safety.price) && (t += " <span>" + e.safety.price + "</span> "), t += " </li> ", i += parseFloat(e.safety.price), t += " "), t += " ", null !== e.mitvMember && (t += " <li>" + e.mitvMember.name + " ", 0 !== parseFloat(e.mitvMember.price) && (t += " <span>" + e.mitvMember.price + "</span> "), t += " </li> ", i += parseFloat(e.mitvMember.price), t += " "), t += " ", e.parts.length > 0) {
			t += " ";
			var n = e.parts;
			if(n)
				for(var a, s = -1, o = n.length - 1; o > s;) a = n[s += 1], t += " ", parseFloat(a.price) > 0 && (t += " <li>" + a.name + " <span>" + a.price + "</span> </li> ", i += parseFloat(a.price), t += " "), t += " ";
			t += " "
		}
		return t += ' <li class="totlePrice"> ', t += "booking" === e.type ? " 预付款 " : " 总计 ", t += " ：" + i + "元 ", e.product.shipment_text && (t += " <em>(" + e.product.shipment_text + ")</em> "), t += " </li></ul>"
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="pro-choose list-choose list-choose-small hide" id="J_safety"> <div class="step-title"> 选择小米提供的意外险 <a onclick="_msq.push([\'trackEvent\', \'' + e.goods_name + "_了解意外险_产品购买页', '" + e.goods_name + "', 'pcpid', '']);\" href=\"" + e.href + e.type + '" target="_blank" >了解意外险 &gt;</a> </div> <ul> <li onclick="_msq.push([\'trackEvent\', \'' + e.goods_name + "_产品购买页', '" + e.goods_name + "', 'pcpid', '']);\" data-price=\"" + e.goods_price + '元" data-name="' + e.goods_name + '" data-id="' + e.goods_id + '"> <i class="iconfont icon-checkbox" ><em>√</em></i> <img src="' + e.img_800 + '?width=50&height=50" > <div> <span class="name">' + e.goods_name + '</span> <p class="desc">' + e.goods_desc + '</p> <span class="price"> ';
		return 0 !== parseFloat(e.goods_price) && (t += " " + e.goods_price + "元 "), t += " </span> </div> </li> </ul></div>"
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "";
		if(e.goods && e.goods.action) {
			t += " ";
			var i = e.goods.action;
			t += " ", "bigtap" === i.type || "presales" === i.type || "booking" === i.type ? (t += " ", e.stock && e.stock[e.goods.goods_id] ? (t += " ", i.isBigtap ? (t += " ", 1 === e.stock[e.goods.goods_id].hdstatus ? (t += " ", t += i.check_login && !e.isLogin ? ' <li> <a href="' + e.href + '" class="btn btn-primary btn-biglarge" data-type="' + i.type + '" data-isbigtap="' + i.isBigtap + '">登录后购买</a> </li> ' : ' <li class="countdown" data-name="' + i.name + '"> <a data-type="' + i.type + '" data-tip="' + i.next_sale_tip + '" class="btn btn-line-primary btn-biglarge J_setRemind" href="javascript:void(0);">到货通知</a> </li> ', t += " ") : (t += " ", 2 === e.stock[e.goods.goods_id].hdstatus ? (t += " ", i.check_login && !e.isLogin ? t += ' <li> <a href="' + e.href + '" class="btn btn-primary btn-biglarge" data-type="' + i.type + '" data-isbigtap="' + i.isBigtap + '">登录后购买</a> </li> ' : (t += " ", t += "presales" === i.type ? ' <li> <a href="javascript:void(0);" class="btn btn-primary  btn-biglarge J_proBuyBtn" id="J_proAddcart" data-type="' + i.type + '" data-isbigtap="' + i.isBigtap + '" data-name="' + i.name + '">' + i.name + '</a> <div class="J_hasChange">全款预售，商品到货后按照预购顺序发货 <a href="#J_rulePresales" data-toggle=\'modal\'>了解详情</a></div> </li> ' : ' <li> <a href="javascript:void(0);" class="btn btn-primary btn-biglarge J_proBuyBtn" id="J_proAddcart" data-type="' + i.type + '" data-isbigtap="' + i.isBigtap + '" data-name="' + i.name + '">' + i.name + "</a> </li> ", t += " "), t += " ") : t += ' <li> <a data-sign="disabled" data-type="' + i.type + '" data-tip="' + i.next_sale_tip + '" class="btn btn-line-primary btn-biglarge J_setRemind" href="javascript:void(0);" data-isbigtap="' + i.isBigtap + '" data-name="' + i.name + '">到货通知</a> </li> ', t += " "), t += " ") : (t += " ", i.check_login && !e.isLogin ? t += ' <li> <a href="' + e.href + '" class="btn btn-primary btn-biglarge" data-isbigtap="' + i.isBigtap + '" data-type="' + i.type + '" data-name="' + i.name + '">登录后购买</a> </li> ' : (t += " ", t += "presales" === i.type ? ' <li> <a href="javascript:void(0);" class="btn btn-primary  btn-biglarge J_proBuyBtn" id="J_proAddcart" data-type="' + i.type + '" data-isbigtap="' + i.isBigtap + '" data-name="' + i.name + '">' + i.name + '</a> <div class="J_hasChange">全款预售，商品到货后按照预购顺序发货 <a href="#J_rulePresales" data-toggle=\'modal\'>了解详情</a></div> </li> ' : ' <li> <a href="javascript:void(0);" class="btn btn-primary btn-biglarge J_proBuyBtn" id="J_proAddcart" data-type="' + i.type + '" data-isbigtap="' + i.isBigtap + '" data-name="' + i.name + '">' + i.name + "</a> </li> ", t += " "), t += " "), t += " ") : t += ' <li> <a  data-sign="disabled" data-type="' + i.type + '" data-tip="' + i.next_sale_tip + '" class="btn btn-line-primary btn-biglarge J_setRemind" href="javascript:void(0);" data-isbigtap="' + i.isBigtap + '" data-name="' + i.name + '" >到货通知</a> </li> ', t += " ") : (t += " ", "subscribe" === i.type || "reserve" === i.type ? (t += " ", i.check_login && !e.isLogin ? t += ' <li> <a href="' + e.href + '" class="btn btn-primary btn-biglarge" data-isbigtap="' + i.isBigtap + '">登录后预约</a> </li> ' : (t += " ", t += i.has_reserved ? ' <li> <a href="javascript:void(0);" class="btn btn-disabled btn-biglarge" >已预约</a> </li> ' : ' <li> <a href="javascript:void(0);" class="btn btn-primary btn-biglarge J_proBuyBtn" data-type="' + i.type + '" data-name="' + i.name + '">' + i.name + "</a> </li> ", t += " "), t += " ") : (t += " ", "common" === i.type ? (t += " ", e.stock ? (t += " ", t += e.stock[e.goods.goods_id] ? ' <li> <a href="javascript:void(0);" class="btn btn-primary btn-biglarge J_proBuyBtn" data-type="' + i.type + '" data-name="' + i.name + '">' + i.name + "</a> </li> " : ' <li> <a data-type="' + i.type + '" data-sign="disabled" data-tip="' + i.next_sale_tip + '" class="btn btn-line-primary btn-biglarge J_setRemind disabled" href="javascript:void(0);" data-name="' + i.name + '">到货通知</a> </li> ', t += " ") : t += ' <li> <a data-type="' + i.type + '" data-sign="disabled" data-tip="' + i.next_sale_tip + '" class="btn btn-line-primary btn-biglarge J_setRemind disabled" href="javascript:void(0);" data-name="' + i.name + '">到货通知</a> </li> ', t += " ") : (t += " <li> ", t += i.path ? ' <a href="' + i.path + '" target="_blank" data-type="' + i.type + '" data-sign="disabled" class="btn btn-primary btn-biglarge" data-name="' + i.name + '">' + i.name + "</a> " : ' <a href="javascript:void(0);" data-type="' + i.type + '" data-sign="disabled" class="btn btn-gray btn-biglarge btn-disabled" data-name="' + i.name + '">' + i.name + "</a> ", t += " </li> "), t += " "), t += " ")
		} else t += '<li> <a data-sign="disabled" data-tip="' + i.next_sale_tip + '" class="btn btn-line-primary btn-biglarge J_setRemind" href="javascript:void(0);">到货通知</a> </li>';
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="infor-con"> ',
			i = e.tab_content;
		if(i)
			for(var n, a = -1, s = i.length - 1; s > a;) {
				if(n = i[a += 1], t += ' <div class="section"> <div class="container"> ', "plain_view" === n.view_type && n.plain_view.img && (t += " ", n.plain_view.title && (t += " <h3>" + n.plain_view.title + " ", n.plain_view.link_title && (t += ' <a href="' + n.plain_view.link_url + '" target="_blank">' + n.plain_view.link_title + ' <i class="iconfont">&#xe624;</i></a> '), t += " </h3> "), t += ' <div class="con"><img data-src="' + n.plain_view.img + '" class="slider"></div> '), t += " ", "text_view" === n.view_type && (t += " ", n.text_view.title && (t += " <h3>" + n.text_view.title + " ", n.text_view.link_title && (t += ' <a href="' + n.text_view.link_url + '" target="_blank">' + n.text_view.link_title + ' <i class="iconfont">&#xe624;</i></a> '), t += " </h3> "), t += " ", n.text_view.des && (t += ' <div class="con con-text "><div class="J_markdown" data-desc="' + n.text_view.desc + '"></div></div> '), t += " "), t += " ", "gallery_view" === n.view_type) {
					t += ' <div class="con"> <div class="imgbox J_imgBox"> ';
					var o = n.plain_view;
					if(o)
						for(var r, a = -1, d = o.length - 1; d > a;) r = o[a += 1], t += ' <img data-src="' + r + '" class="slider"> ';
					t += " </div> </div> "
				}
				t += " </div> </div> "
			}
		return t += "</div>"
	}
}]);