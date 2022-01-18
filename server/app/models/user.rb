class User < ActiveRecord::Base
#   has_secure_password

#   def self.authenticate_with_credentials(email,password)
#     self.where('trim(lower(email)) = ?', email.downcase.strip).first&.authenticate(password)
#   end
end
