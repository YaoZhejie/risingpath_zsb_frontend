/* eslint-disable*/
import axios from 'axios'
import { get, post ,deletes} from './http'

// =======================> 用户 API
// 更新用户信息
export const updateUserMsg = (params) => post(`user/update`, params,{headers: { 'Content-Type': 'application/json'}})
// 返回指定ID的用户
export const getUserOfId = (id) => get(`user/detail?id=${id}`)
//用户登录
export const loginIn = (params) => post(`user/login`, params,{headers: { 'Content-Type': 'application/json'}})
//用户修改密码
export const updatePassword = (params) => post(`user/updatePassword`, params,{headers: { 'Content-Type': 'application/json'}})
//修改头像
export const updatePic = (params) => post(`user/updateUserPic`,params,{headers: { 'Content-Type': 'multipart/form-data'}})

// =======================> 专业信息 API
//根据学校模糊查询
export const getProfessinfoBySchool = (keywords) => get(`professinfo/likeSchoolName?schoolName=${keywords}`)
//根据专业模糊查询
export const getProfessinfoLikeName = (keywords) => get(`professinfo/likeProfessinfo?professName=${keywords}`)
//根据备注模糊查询
export const getProfessinfoLikeRemark = (keywords) => get(`professinfo/likeRemarks?remarks=${keywords}`)



//========================>可视化页面API
//学校总数
export const allSchoolCount = () => get('/count/schoolCount')
//专业总数
export const allProfessinfoCount = () =>get('count/professionCountRep') 
//招生总数
export const allTotalPlan = () =>get('count/allTotalPlan')
//民办院校数量
export const privateSchoolCount = () =>get('count/privateSchoolCount')
//公办院校数量
export const publicSchoolCount = () =>get('count/publicSchoolCount')
//民办招生数量
export const sumPrivateProfession = () =>get('count/sumPrivateProfession')
//公办招生数量
export const sumPublicProfession = () =>get('count/sumPublicProfession')
//各类专业招生数量
export const CountOfMajorsByType =() => get('count/getCountOfMajorsByType')

// =======================> 专业分数 API

//根据学校模糊查询
export const getScoreBySchool = (keywords) => get(`yearscore/scoreLikeSchoolName?schoolName=${keywords}`)
//根据专业模糊查询
export const getScoreLikeName = (keywords) => get(`yearscore/scoreLikeProfessinfo?professName=${keywords}`)
//根据备注模糊查询
export const getScoreLikeRemark = (keywords) => get(`yearscore/scoreLikeRemarks?remarks=${keywords}`)

// =========================> 收集 API
//用户收藏志愿
export const insertCollectForUser = (params) =>post(`collect/addCollect`, params,{headers: { 'Content-Type': 'application/json'}})
//用户删除志愿
export const deleteColletByIds = (params) => post(`collect/deleteCollect`,params,{headers: { 'Content-Type': 'application/json'}})
//获取用户的所有志愿
export const selectCollectInfoByUserId = (keywords) =>post(`collect/selectCollectInfoByUserId?userId=${keywords}`)

//============================> 模拟志愿填报API SimVolunteersCache
//获取学校
export const getSimulationSchool = (remarks,type) =>get(`simulation/getSimulationSchool/${remarks}/${type}`)
//获取专业
export const getSimulationMajor = (remarks,school,type) => get(`simulation/getSimulationMajor/${remarks}/${school}/${type}`)
//缓存学生的信息到redis(保存志愿)
export const SimVolunteersCache = (params) =>post(`simulation/SimVolunteersCache`, params,{headers: { 'Content-Type': 'application/json'}})
//开始的时候获取学生以前填写的志愿
export const getSimVolunteersCache = (userId) => post(`simulation/getSimVolunteersCache/${userId}`)
//导出志愿
// export const generateSimVolunteers = (userId) => get(`simulation/exportSimVolunteers/${userId}`)


//============================> 智能志愿填报API 
//非对口专业填报
export const getNoTargetVolunteer = (params) =>post(`volunteer/getNoTargetVolunteer`,params,{headers: { 'Content-Type': 'application/json'}})
//对口专业填报
export const getTargetVolunteer = (params) =>post(`volunteer/getTargetVolunteer`,params,{headers: { 'Content-Type': 'application/json'}})
// =======================> 校长信箱 API

export const sendLetter = (params) => post(`letterbox/insert`, params)

// =======================> 学习资料 API
export const getAllLeranLink = () => get('learn/allLearn')

//========================> 公告API
 export const getNotice = () =>get('notice/getNotice')