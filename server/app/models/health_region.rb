class HealthRegion < ActiveRecord::Base
  belongs_to :stage

  t.string   "region_name"
  t.string   "region_code"

  validates :region_name, presence: true
  validates :region_code, presence: true
 

end
