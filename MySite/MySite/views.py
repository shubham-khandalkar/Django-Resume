import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

class home(TemplateView):
    template_name = 'index.html'

@csrf_exempt
def sendmail(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        message = request.POST.get('message', '')
        if len(name) < 3 or len(message) < 3:
            print('message length too small')
            print(name)
            print(message)
            return HttpResponse(status='406')
        s = smtplib.SMTP(host='smtp.gmail.com', port=587)
        s.starttls()
        s.login('shubham.sk473@gmail.com', 'umzydjgeriimibtt')
        msg = MIMEMultipart()
        msg['From']='shubham.sk473@gmail.com'
        msg['To']='shubham.khandalkar@outlook.com'
        msg['Subject']='Website Resume Mail from: ' + name
        text = 'email: ' + email + '\n\n' + 'message: ' + message
        msg.attach(MIMEText(text, 'plain'))
        print('sending a mail')
        s.send_message(msg)
        return HttpResponse(status=200)
    else:
        print('invalid method')
        return HttpResponse(status=406)