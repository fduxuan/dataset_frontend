/*
 * Created on 2021/11/18 12:50 下午
 *
 * @Author: fduxuan
 *
 * Desc:
 */
import {Post, Get} from './req'


export default class QuestionService{

    static async find(find_query){
        return await Post(`/api/marking/find`, find_query)
    }

    static async show(qid){
        return await Get(`/api/marking/show/${qid}`)
    }

    static async progress(range){
        return await Get(`/api/marking/progress/${range}`)
    }

    static async save(qid, keywords){
        return await Post(`/api/marking/save`, {
            id: qid,
            keywords: keywords,
        })
    }
}
