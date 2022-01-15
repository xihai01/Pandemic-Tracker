class CreateRestrictions < ActiveRecord::Migration
  def change
    create_table :restrictions do |t|
      t.integer :health_region_id
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
