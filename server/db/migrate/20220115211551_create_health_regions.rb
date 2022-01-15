class CreateHealthRegions < ActiveRecord::Migration
  def change
    create_table :health_regions do |t|
      t.string :region_name
      t.string :region_code
      t.string :ceremony
      t.integer :max_indoor_gathering
      t.integer :max_outdoor_gathering
      t.string :retail
      t.string :food_establishment
      t.string :sports_recreational
      t.string :entertainment
      t.string :color_code
      t.timestamps null: false
    end
  end
end
