class FavoritesController < ApplicationController 
  def index
    @favorites = Favorite.all
    msg = { :favorites => @favorites }
    render :json => msg
  end

  def show
    @favorite = Favorite.find(params[:id])
    msg = { :favorite => @favorite }
    render :json => msg
  end

  def create
    @favorite = Favorite.create({:quote => params[:quote]})
    msg = { :message => "Created successfully!", :favorite => @favorite }
    render :json => msg
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy

    msg = { :message => "Destroyed successfully!", :favorite => @favorite }
    render :json => msg
  end

end