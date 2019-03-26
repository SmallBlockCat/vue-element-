import * as types from './mutation-types'
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import axios from 'axios'

export default{
	[types.SET_LANGUAGE] (state,language){
		state.language = language
	},
	[types.INCREMENT] (state,count){
		state.count = count++
	},
	[types.DECREMENT] (state,count){
		state.count = count--
	},
}
