<template>
	 <el-dropdown class="international" trigger="click" @command="handleSetLanguage">
	    <div>
	      <span>lanage</span>
	    </div>
	    <el-dropdown-menu slot="dropdown">
	      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
	      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
	      <el-dropdown-item :disabled="language==='es'" command="es">Español</el-dropdown-item>
	    </el-dropdown-menu>
	  </el-dropdown>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		computed: {
		    language() {
		      return this.$store.getters.language
		    }
		},
		methods:{
			handleSetLanguage(lang){
				this.$store.commit('SET_LANGUAGE', lang)
				this.$i18n.locale = lang
			}
		},
		mounted(){
		}
	}
</script>

<style>
</style>