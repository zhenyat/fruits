class FruitsController < ApplicationController
  def dashboard
  end

  def index
    render json: Fruit.all#.order(id: 'DESC')
  end

  def create
    fruit = Fruit.create(fruit_params)
    render json: fruit
  end

  def destroy
    Fruit.destroy(params[:id])
  end

  def update
    fruit = Fruit.find(params[:id])
    fruit.update_attributes(fruit_params)
    render json: fruit
  end

  private

  def fruit_params
    params.require(:fruit).permit(:id, :name, :description)
  end
end
