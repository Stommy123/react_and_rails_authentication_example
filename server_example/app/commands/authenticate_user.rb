class AuthenticateUser 
  prepend SimpleCommand 

  def initialize(email, password)
    @email = email 
    @password = password
  end 

  def call 
    { user: user, token: JsonWebToken.encode(user_id: user.id) } if user 
  end

  private 

  attr_accessor :email, :password 

  def user 
    user = User.find_by_email(@email)
    if user && user.authenticate(password)
      user 
    else 
      errors.add :user_authenticate, 'invalid credentials'
    end
  end 
end 