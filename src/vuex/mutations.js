import * as types from './mutation-types'
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import axios from 'axios'

export default{
	//汇享健康预约日期
	[types.SET_LANGUAGE] (state,language){
		state.language = language
		VueCookie.set("language",state.language,30)
	},
}
