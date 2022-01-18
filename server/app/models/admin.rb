class Admin < ActiveRecord::Base
  # has_secure_password

  def self.authenticate_with_credentials(email,password)
    # self.where('trim(lower(email)) = ?', email.downcase.strip).first&.authenticate(password)
    admin = Admin.find_by_email(email)
    if admin && Admin.where('password = ?',password)
      return admin
    else 
      return nil
    end
  end

end
