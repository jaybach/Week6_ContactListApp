# Homepage (Root path)

get '/' do
  @contacts = Contact.all
  erb :'index'
end

post '/' do
  @contact = Contact.create(
    name: params[:name],
    email: params[:email]
    )
  # return json instead of erb
  # erb :'index'
  request.accept.each do |type|
    case type.to_s
    when 'application/json', 'text/json', 'text/javascript'
      halt @contact.to_json
    when 'text/html'
      halt redirect '/'
    end
  end
  halt 406
end
