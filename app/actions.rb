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
end
