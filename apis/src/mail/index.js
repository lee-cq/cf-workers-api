import { Email } from './smtp'


/** 发送一个或多个邮件
 * URI: /apis/mail/send  
 * 
 * 目前不支持附件
 * query中指定收件人 & subject
 * body 中指定内容
 */
export async function send_mail(request, response) {
    // 
    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 524,
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: request.Body
    }).then(() =>{
        response.send(200, 'ok')
    }
    ).catch(
        () => {
            response.send(500, 'Error')
        }
    ).finally(
        () => {
            response.send(403, 'Error: 404')
        }
    )

}