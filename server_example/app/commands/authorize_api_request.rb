class AuthorizeApiRequest
  prepend SimpleCommand 

  def initialize(headers = {})
    @headers = headers
  end 

  def call 
    user 
  end

  private 

  attr_reader :headers

  def user 
    if decode_auth_token
      @user ||= User.find(decode_auth_token[:user_id])
    else 
      @user || errors.add(:token, 'Invalid token') && nil 
    end
  end

  def decode_auth_token 
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end 

  def http_auth_header 
    if headers['Authorization'].present? 
      headers['Authorization'].split(' ').last 
    else 
      errors.add(:token, 'Missing token')
    end
  end 
end 