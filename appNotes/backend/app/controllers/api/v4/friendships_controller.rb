class Api::V4::FriendshipsController < ApplicationController
  def index
    friendships = Friendship.all()
    render json:friendships, status: 200
  end

  def new
    friendship = Friendship.new
  end

  def create
    friendship = Friendship.new(useremail1: friendship_params[:useremail1], useremail2: friendship_params[:useremail2])
    if friendship.save
      render json:friendship, status: 200
    else
      render json: {error: "creating error..."}
    end
  end

  def show
    friendship = Friendship.find_by(id:params[:id])
    if friendship
      render json:friendship, status: 200
    else
      render json: {error: "Friendship not found!"}
    end
  end

  def update
    friendship = Friendship.find(params[:id])

    if friendship
      friendship.update(useremail1: params[:useremail1], useremail2: params[:useremail2])
      render json: "Friendship updated successfully"
    else
      render json:{ error: "Friendship not found"}
    end
  end

  

  def destroy
    friendship = Friendship.find(params[:id])
    if friendship
      friendship.destroy
      render json: "Friendship deleted successfully"
    end
  end

  private
    def friendship_params
      params.require(:friendship).permit(:useremail1, :useremail2)
    end
end
